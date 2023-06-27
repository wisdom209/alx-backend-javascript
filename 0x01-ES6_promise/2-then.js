export default function handleResponseFromAPI(promise) {
  try {
    promise
      .then(() => {
        console.log('Got a response from the API');
        return { status: 200, body: 'success' };
      })
      .catch(() => Error());
  } catch (error) {
    if (error) {
      return Error();
    }
    return null;
  }
}
