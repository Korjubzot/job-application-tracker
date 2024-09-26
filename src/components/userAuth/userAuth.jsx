// eslint-disable-next-line no-unused-vars
import React from "react";
import { auth } from "../../firebase";

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    console.log("Signing in...");
  } catch (error) {
    console.log(error);
  }
};

function UserAuth() {
  return (
    <div>
      <button onClick={signInWithEmailAndPassword}>Click to sign in</button>
    </div>
  );
}

export default UserAuth;
