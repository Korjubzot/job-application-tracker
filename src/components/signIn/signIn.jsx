import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

// TODO style the signIn and signUp components

const PasswordSignIn = () => {
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in", user);
      navigate("/tracker");
      setError(false);
      setErrorMessage("");
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;

      setError(true);
      console.log(errorCode);

      switch (errorCode) {
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/user-disabled":
          setErrorMessage(
            "This email address is disabled by the administrator."
          );
          break;
        case "auth/user-not-found":
          setErrorMessage("This email address is not registered.");
          break;
        case "auth/wrong-password":
          setErrorMessage(
            "The password is invalid or the user does not have a password."
          );
          break;
        default:
          setErrorMessage(errorMessage);
          break;
      }
    }
  };

  return (
    <div className="signinContainer">
      <div className="signinContainer__box">
        <div className="signinContainer__box__inner">
          <h1>Sign In</h1>
          <form className="signinContainer__box__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign In</button>
            {error && <p className="error-message">{errorMessage}</p>}
          </form>

          <div className="signinContainer__box__signup">
            <p>
              Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSignIn;
