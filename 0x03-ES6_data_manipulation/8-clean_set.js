export default function cleanSet(aSet, startString) {
  const stringArr = [];
  const removeLen = startString.length;

  if (startString === '') {
    return '';
  }

  for (const i of aSet) {
    if (i.length > removeLen) {
      const toCheck = i.slice(0, removeLen);
      if (toCheck === startString) {
        stringArr.push(i.slice(removeLen, i.length));
      }
    }
  }

  return stringArr.join('-');
}
