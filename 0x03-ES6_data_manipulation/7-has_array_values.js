export default function hasValuesFromArray(aSet, anArray) {
  for (const i of anArray) {
    if (!aSet.has(i)) {
      return false;
    }
  }
  return true;
}
