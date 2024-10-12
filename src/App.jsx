import "./App.css";
import JobListings from "./components/jobListings/jobListings";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import { AuthProvider } from "./authProvider";
import PasswordSignIn from "./components/signIn/signIn";
import PasswordSignUp from "./components/signUp/signUp";
import SignOutButton from "./components/signOut/signOutButton";

let testData = [
  {
    id: 0,
    company: "Lionbridge",
    role: "QA Engineer",
    salary: "25PLN/hr",
  },

  {
    id: 1,
    company: "Starlike",
    role: "Consultant",
    salary: "10,000GBP/m",
  },

  {
    id: 2,
    company: "Vertigo",
    role: "Chef",
    salary: "9.50GBP/hr",
  },
  {
    id: 3,
    company: "The Vurger Co.",
    role: "Kitchen Manager",
    salary: "14GBP/hr",
  },
];

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <nav>
            {/* TODO style this navbar to be horizontal and pretty */}
            <ul>
              <li>
                <Link to="/tracker">Tracker</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <SignOutButton />
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/signin" element={<PasswordSignIn />} />
            <Route path="/signup" element={<PasswordSignUp />} />
            <Route
              path="/tracker"
              element={
                <ProtectedRoute>
                  <JobListings data={testData} />
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
