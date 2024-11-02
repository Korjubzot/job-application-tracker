import "./App.css";
import JobListings from "./components/jobListings/jobListings";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import { AuthProvider } from "./authProvider";
import PasswordSignIn from "./components/signIn/signIn";
import PasswordSignUp from "./components/signUp/signUp";
import SignOutButton from "./components/signOut/signOutButton";

import FirebaseTest from "./components/firebaseTest/firebaseTest";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <nav className="bg-gray-800 p-4">
            {/* TODO style this navbar to be horizontal and pretty */}
            <ul className="flex justify-around">
              <li>
                <Link
                  to="/tracker"
                  className="text-white hover:text-blue-400 active:text-blue-500"
                >
                  Tracker
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="text-white hover:text-blue-400 active:text-blue-500"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-white hover:text-blue-400 active:text-blue-500"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <SignOutButton className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-500" />
              </li>
            </ul>
          </nav>
          <FirebaseTest />
          <Routes>
            <Route path="/signin" element={<PasswordSignIn />} />
            <Route path="/signup" element={<PasswordSignUp />} />
            <Route
              path="/tracker"
              element={
                <ProtectedRoute>
                  <JobListings />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
