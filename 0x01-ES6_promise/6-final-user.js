import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  const signup = signUpUser(firstname, lastname);
  const photoUpload = uploadPhoto(filename);

  Promise.allSettled([signup, photoUpload])
    .then((value) => {
      console.log(value);
    })
    .catch((e) => e.message);
}
