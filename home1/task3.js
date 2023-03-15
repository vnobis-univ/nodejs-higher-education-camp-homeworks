const add = (a, b) => {
  console.log(`add execution: ${a} + ${b}`)
  return a + b;
};

const wrapper = (funcToCache) => {
  const cache = new Map();

  // implementation
  return (...args) => {
    const argsAsStr = JSON.stringify(args);
    const cacheValue = cache.get(argsAsStr);
    
    if (cacheValue) {
      return cacheValue;
    } else {
      const result = funcToCache(...args);
      cache.set(argsAsStr, result);
      return result;
    }
  };
};

const cachedAdd = wrapper(add);
console.log("cachedAdd(2,2) = ", cachedAdd(2,2)); // 4 calculated
console.log("cachedAdd(5,8) = ", cachedAdd(5,8)); //13 calculated
console.log("cachedAdd(2,2) = ", cachedAdd(2,2)); // 4 from cache
