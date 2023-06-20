const runSequentially = async <TArrayType, TCallbackResult>(
  array: TArrayType[],
  callback: (item: TArrayType, index: number) => Promise<TCallbackResult>
): Promise<TCallbackResult[]> => {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    const callbackResult = await callback(array[i], i);
    resultArray.push(callbackResult);
  }

  return resultArray;
};

const array: Array<string> = ["one", "two", "three"];

const results = await runSequentially(array, (item, index) =>
  Promise.resolve({
    item,
    index,
  })
);

console.log("Test output", JSON.stringify(results));
