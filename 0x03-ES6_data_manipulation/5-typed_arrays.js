export default function createIntTypedArray(length, position, value) {
  const modArr = new ArrayBuffer(length);

  const arr = new DataView(modArr);
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  arr.setUint8(position, value);
  return arr;
}
