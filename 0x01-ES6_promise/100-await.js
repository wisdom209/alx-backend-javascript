import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const uploadBody = await uploadPhoto();
  const userBody = await createUser();

  if (!uploadBody || !userBody) {
    return { photo: null, user: null };
  }
  return { photo: uploadBody, user: userBody };
}
