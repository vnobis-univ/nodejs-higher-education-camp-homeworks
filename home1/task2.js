function cloneDeep(obj) {
  // no object or item to clone
  if (obj === null) {
    return null;
  }

  if (Array.isArray(obj)) {
    return obj.map(arrItem => cloneDeep(arrItem));
  } else if (typeof obj === "object") {
    const clone = {};
    for (const [key, value] of Object.entries(obj)) {
      clone[key] = cloneDeep(value);
    }
    
    return clone;
  } else {
    // other value types
    return obj;
  }
}

const cloneTarget = {
  pNumber: 123,
  pBool: false,
  pString: "str",
  pNestedObj: { n1: 456, n2: "nested string" },
  pNestedArr: [10, true, { arr_nested: 50}]
}

const cloned = cloneDeep(cloneTarget);

console.log("Target : ", JSON.stringify(cloneTarget));
console.log("Clone  : ", JSON.stringify(cloned));

// after mutation/edit
cloneTarget.pNumber = 789;
cloneTarget.pString = "aaa";
cloneTarget.pNestedObj.n2 = "edited nested";
cloneTarget.pNestedArr[0] = 20;
cloneTarget.pNestedArr[2].arr_nested = 55;

console.log("After mutation:");
console.log("Target : ", JSON.stringify(cloneTarget));
console.log("Clone  : ", JSON.stringify(cloned));