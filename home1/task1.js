function isAnagrams(str1 = "", str2 = "") {
  if (str1.length !== str2.length) {
    return false;
  }

  const letterBucket = Array.from(str2);
  return Array.from(str1).every((letter) => {
    const index = letterBucket.indexOf(letter);
    if (index !== -1) {
      letterBucket.splice(index, 1);
      return true;
    } else {
      return false;
    }
  });
}


console.log("Positive case: ", isAnagrams("rasp", "spar"));
console.log("Negative case: ", isAnagrams("rasp", "soap"));
console.log("Different length: ", isAnagrams("rasp", "candy"));
console.log("Test: ", isAnagrams("aaab", "abbb"));