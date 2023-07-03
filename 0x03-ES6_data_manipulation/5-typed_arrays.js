export default function createIntTypedArray(length, position, value) {
  const modArr = new ArrayBuffer(length);

  const arr = new DataView(modArr);
  arr.setUint8(position, value);
  return arr;
}
