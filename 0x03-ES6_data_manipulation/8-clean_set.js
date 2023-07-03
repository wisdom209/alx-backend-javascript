export default function cleanSet(aSet, startString) {
  const stringArr = [];
  const removeLen = startString.length;

  aSet.forEach((element) => {
    if (element.startsWith(startString)) {
      stringArr.push(element.slice(removeLen));
    }
  });

  return stringArr.join('-');
}
