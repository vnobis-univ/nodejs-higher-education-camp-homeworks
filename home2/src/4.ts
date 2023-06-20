// Write a node.JS program with TypeScript that gets from the command line numeric parameter - frequency in seconds. Program should print every tick (defined by frequency) next system information:

// - operating system
// - architecture
// - current user name
// - cpu cores models
// - cpu temperature
// - graphic controllers vendors and models
// - total memory, used memory, free memory in GBs
// - if system has, battery info (charging, percent, remaining time)

import os from "os";
import { setInterval } from "timers/promises";

const toGB = (bytes: number): string => {
  const gb = bytes / 1024 / 1024 / 1024;
  return gb.toFixed(2);
}

// assume that cli args are in format [".../node", ".../4,ts", tickSize]
const [, , tickSizeRaw] = process.argv;
const tickSize = Number(tickSizeRaw);

console.log(`Starting os watcher...`);


// old "setInterval" can be used too, but new "async" alternative looks interesting
for await (const startTime of setInterval(tickSize, Date.now())) {
  const now = Date.now();
  const runtimeSeconds = (now - startTime) / 1000;

  console.log(`------------------------------------------------`);
  console.log(`Running for ${runtimeSeconds} seconds`);
  console.log(`  platform:             ${os.platform}`);
  console.log(`  architecture:         ${os.arch}`);
  console.log(`  username:             ${os.userInfo().username}`);
  console.log(`  cpu cores models:`);
  os.cpus().forEach(cpu => {
    console.log(`    ${cpu.model}`);
  })
  // ??? how to get?
  console.log(`  cpu temperature:      -`);
  console.log(`  gpu vendor and model: -`);
  console.log(`  total memory in GBs:  ${toGB(os.totalmem())}`);
  console.log(`  used memory in GBs:   ${toGB(os.totalmem() - os.freemem())}`);
  console.log(`  free memory in GBs:   ${toGB(os.freemem())}`);
  console.log(`  battery info:         -`);
}
