import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";

const PasswordSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
      navigate("/tracker");
    } catch (err) {
      const errorMessage = err.message;
      const errorCode = err.code;

      setError(true);
      console.log(errorCode);

      switch (errorCode) {
        case "auth/weak-password":
          setErrorMessage("The password is too weak.");
          break;
        case "auth/email-already-in-use":
          setErrorMessage(
            "This email address is already in use by another account."
          );
          break;
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/operation-not-allowed":
          setErrorMessage("Email/password accounts are not enabled.");
          break;
        default:
          setErrorMessage(errorMessage);
          break;
      }
    }
  };

  return (
    <div className="signupContainer">
      <div className="signupContainer__box">
        <div className="signupContainer__box__inner">
          <h1>Sign Up</h1>
          <form className="signupContainer__box__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={password}
            />
            <button type="submit">Sign Up</button>
            {error && <p>{errorMessage}</p>}
          </form>

          <div className="signupContainer__box__login">
            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSignUp;
