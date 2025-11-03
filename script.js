function firstWord(str) {
  // Trim to remove leading/trailing spaces
  str = str.trim();

  // If string is empty after trimming, return empty string
  if (str === "") return "";

  // Find index of first space
  const spaceIndex = str.indexOf(" ");

  // If no space found, return entire string
  if (spaceIndex === -1) return str;

  // Otherwise, return substring from start to first space
  return str.substring(0, spaceIndex);
}
