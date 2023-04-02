// Write a function that accepts any kind of array and a predicate for array elements removing. Passed array must be mutated. All removed elements must be returned as array types must apply automatically (Template function).

// Invocation example:

// const array = [1, 2, 3, 6, 7, 9];
// const removedElements = arrayMutateRemove(array, (item) => item % 2 === 0);

// IDE must consider variables from example as next:
// item: number
// removedElements: Array

// result of invocation:
// array = [1, 3, 7, 9]
// removedElements = [2, 6]

const arrayMutateRemove = <Type>(array: Type[], callback: (item: Type) => boolean): Type[] => {
  const removedItems = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      removedItems.push(array[i]);
      array.splice(i, 1);
      i--;
    }
  }

  return removedItems;
};

const array = [1, 2, 3, 6, 7, 9];
const removedElements = arrayMutateRemove(array, (item) => item % 2 === 0);

console.log("Test output", JSON.stringify(removedElements));
