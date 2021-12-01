import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {
  User,
  GoogleAuthProvider,
  onAuthStateChanged,
  getAuth,
  signOut,
} from 'firebase/auth';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

const firebaseConfig = {
  // put firebase config in here.
  // You can find the config in Project Settings > General
  // and choose the Config option in Firebase SDK snippet
  apiKey: "AIzaSyApFN9JTuIKz_4JbMOntUKfb6o1HYSqE5I",
  authDomain: "webdeva2-478bd.firebaseapp.com",
  projectId: "webdeva2-478bd",
  storageBucket: "webdeva2-478bd.appspot.com/",
  messagingSenderId: "544198736831",
  appId: "1:544198736831:web:3e9c78a50fbda7b61bbf0a",
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

type Props = {
  readonly children: React.ReactNode;
};

const Authenticated = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  };

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return (
    <>
      {user ? (
        <>
          <h2>Hi, {user.displayName}!</h2>
          <button onClick={() =>
          {signOut(auth)
            window.location.reload();
          }}>Sign Out</button>
          {children}
        </>
      ) : (
        <div>
          <h5>To add reviews or edit your existing reviews, please log in below!</h5>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      )}
    </>
  );
};

export default Authenticated;