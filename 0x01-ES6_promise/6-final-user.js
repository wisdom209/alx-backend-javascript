import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  const signup = signUpUser(firstname, lastname);
  const photoUpload = uploadPhoto(filename);

  return Promise.allSettled([signup, photoUpload]).then((value) => value);
}
