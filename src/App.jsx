import "./App.css";
import JobListings from "./components/jobListings/jobListings";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    <Router>
      <div className="flex flex-col h-screen">
        <nav>
          <ul>
            <li>
              <Link to="/tracker">Tracker</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <button onClick={console.log("signing out...")}>Sign out</button>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/tracker" element={<JobListings data={testData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
