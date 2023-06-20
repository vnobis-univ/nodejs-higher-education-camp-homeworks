// Write a node.JS program with TypeScript that:
// gets from the command line string parameter - path to JSON file, reads and parses its content.
// Then, program should create a folder “<JSON_filename>_pages”.
// For each link in the file get the HTML content of it and save it to the file in the created folder.
// JSON file contains an array of strings - links.

import { readFile, access, mkdir, writeFile } from "fs/promises";

import { resolve, join, dirname, basename, extname } from "path";

import { get as getWithCallback } from "https";

const get = (link: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    getWithCallback(link, (resp) =>{
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        resolve(data);
      });
    }).on("error", (err) => {
      reject(err);
    });
  })
};

// assume that cli args are in format [".../node", ".../3,ts", pathToJson]
const [, , pathToJson] = process.argv;
const resolvedPathToJson = resolve(pathToJson);

// read json file
let links: string[] = [];
try {
  console.log(`Trying to read JSON - ${resolvedPathToJson}`);

  const jsonContent = await readFile(resolvedPathToJson,{ encoding: "utf8"});

  console.log(`Parsing JSON...`);

  links = JSON.parse(jsonContent);
  console.log(`Parsed (read ${links.length} links)`);
} catch (err) {
  console.error(`Failed to read JSON file "${pathToJson}"`, err);
}

// create folder “<JSON_filename>_pages”
const folderPath = join(
  dirname(resolvedPathToJson),
  `${basename(resolvedPathToJson, extname(resolvedPathToJson))}_pages`
);

// check for folder existence
try {
  await access(folderPath);
  console.log('Destination folder already exists');
} catch {
  console.log('Destination folder will be created...');
  await mkdir(folderPath);
  console.log('Created');
}

for (const link of links) {
  console.log(`Downloading link "${link}"...`);
  const data = await get(link);

  const linkUrl = new URL(link);
  const linkParts = linkUrl.pathname.split("/");
  const linkFilePath = join(folderPath, linkParts[linkParts.length - 1] + ".html");

  console.log(`Saving to file "${linkFilePath}"...`);

  await writeFile(linkFilePath, data);

  console.log(`Saved`);
}

console.log(`Completed`);
