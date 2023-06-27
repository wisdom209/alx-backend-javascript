export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (let idx of array) {
    let value = idx;
    array[i] = appendString + value;
    i++;
  }
  return array;
}
