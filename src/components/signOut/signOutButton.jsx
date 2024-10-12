import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
// eslint-disable-next-line no-unused-vars
import React from "react";

function SignOutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return <button onClick={handleLogout}>Sign out</button>;
}

export default SignOutButton;
