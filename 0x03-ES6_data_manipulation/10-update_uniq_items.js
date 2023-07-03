export default function updateUniqueItems(aMap) {
  if (aMap instanceof Map) {
    for (const [key, value] of aMap) {
      if (value === 1) {
        aMap.set(key, 100);
      }
    }
  } else {
    throw Error('Cannot process');
  }
}
