import "./App.css";
import JobListings from "./components/jobListings/jobListings";

let data = {
  company: "Lionbridge",
  role: "QA Engineer",
  salary: "25PLN/hr",
  status: "Blank",
};

// let data2 = {
//   company: "Starlike",
//   role: "Consultant",
//   salary: "10,000GBP/m",
//   status: "Blank",
// };

function App() {
  return (
    <>
      <h1>Job Application Tracker</h1>
      <p>
        You can use this tracker to input data on your job applications. Add the
        company, role, salary, and current status.
      </p>
      <JobListings data={data} />
    </>
  );
}

export default App;
