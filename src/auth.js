import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

export async function registerUser(formData) {
  try {
    // Create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    // Access the user data
    const user = userCredential.user;

    // Update the user profile with the provided username
    await updateProfile(auth.currentUser, {
      displayName: formData.username,
    });

    return user;
  } catch (error) {
    throw error;
  }
}
