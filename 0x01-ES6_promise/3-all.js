import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const createUserPromise = createUser();

  return Promise.all([photoPromise, createUserPromise])
    .then((e) => {
      console.log(`${e[0].body} ${e[1].firstName} ${e[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
