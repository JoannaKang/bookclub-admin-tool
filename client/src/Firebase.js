import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCmBrVHLIaw24Dr5PL9-RXGVYbF2wd8osc",
  authDomain: "bookclub-admin-tool.firebaseapp.com",
  projectId: "bookclub-admin-tool",
  storageBucket: "bookclub-admin-tool.appspot.com",
  messagingSenderId: "89561000404",
  appId: "1:89561000404:web:20f80f8fd9d85673a7ce41",
  measurementId: "G-KP3MLV0TQM"
};

initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

export const signUpWithEmail = async (email, password) => {
  try {
    const auth = getAuth()
    const newUser = await createUserWithEmailAndPassword(auth, email, password)
    return newUser.user
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    alert(errorCode, errorMessage, email)    
  }
}

export const signInWithEmail = (email, password) => {
  try {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(res => console.log(res.user))
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    alert(errorCode, errorMessage, email)    
  }
}

export const signUpWithGoogleId = async () => {
  try {
    const auth = getAuth();
    const loginUser = await signInWithPopup(auth, provider)
    return loginUser.user
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    alert(errorCode, errorMessage, email)    
  }
}
