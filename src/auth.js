import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

export async function registerUser(formData) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const user = userCredential.user;

    await updateProfile(auth.currentUser, {
      displayName: formData.username,
    });

    return user;
  } catch (error) {
    throw error;
  }
}

export async function isEmailAlreadyRegistered(email) {
  try {
    await signInWithEmailAndPassword(auth, email, "dummyPassword");

    return true;
  } catch (error) {
    if (
      error.code === "auth/wrong-password" ||
      error.code === "auth/invalid-credential"
    ) {
      return false;
    }

    throw error;
  }
}
