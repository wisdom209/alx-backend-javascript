import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const createUserPromise = createUser();

  Promise.all([photoPromise, createUserPromise]).then((e) => {
    e.forEach((Obj) => {
      if (Obj.body) {
        process.stdout.write(`${Obj.body} `);
      } else {
        console.log(`${Obj.firstName} ${Obj.lastName}`);
      }
    });
  });
}
