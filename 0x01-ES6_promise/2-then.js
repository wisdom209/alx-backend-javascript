export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a repsonse from the API');
      return { status: 200, body: 'Success' };
    })
    .catch(() => new Error());
}
