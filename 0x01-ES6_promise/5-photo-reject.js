export default function uploadPhoto(filename) {
  const myError = new Error(`${filename} cannot be processed`);
  Object.defineProperty(myError, 'stack', { value: '' });

  return Promise.reject(myError);
}
