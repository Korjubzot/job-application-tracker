import "./App.css";
import JobListings from "./components/jobListings/jobListings";
import UserAuth from "./components/userAuth/userAuth";

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
    <div className="flex flex-col h-screen">
      <UserAuth />
      <h1 className="align-top">Job Application Tracker</h1>
      <p className="m-4">
        You can use this tracker to input data on your job applications. Add the
        company, role, salary, and current status.
      </p>
      <p className="m-4">
        Times are tough right now. Keep your head up and remember that you are
        not your job.
      </p>
      <JobListings data={testData} />
    </div>
  );
}

export default App;
