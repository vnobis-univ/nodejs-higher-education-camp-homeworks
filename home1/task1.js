function isAnagrams(str1 = "", str2 = "") {
  if (str1.length !== str2.length) {
    return false;
  }

  return Array.from(str1).every((letter) => {
    return str2.includes(letter);
  });
}


console.log("Positive case: ", isAnagrams("rasp", "spar"));
console.log("Negative case: ", isAnagrams("rasp", "soap"));
console.log("Different length: ", isAnagrams("rasp", "candy"));