import React from 'react';
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCmBrVHLIaw24Dr5PL9-RXGVYbF2wd8osc",
  authDomain: "bookclub-admin-tool.firebaseapp.com",
  projectId: "bookclub-admin-tool",
  storageBucket: "bookclub-admin-tool.appspot.com",
  messagingSenderId: "89561000404",
  appId: "1:89561000404:web:20f80f8fd9d85673a7ce41",
  measurementId: "G-KP3MLV0TQM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomPrameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase