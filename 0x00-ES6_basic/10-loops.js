export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const newArray = [];

  for (const idx of array) {
    newArray[i] = appendString + idx;
    i += 1;
  }
  return newArray;
}
