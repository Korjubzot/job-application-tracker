import "./App.css";
import JobListings from "./components/jobListings/jobListings";
import UserAuth from "./components/userAuth/userAuth";

let data = {
  company: "Lionbridge",
  role: "QA Engineer",
  salary: "25PLN/hr",
  status: "Blank",
};

let data2 = {
  company: "Starlike",
  role: "Consultant",
  salary: "10,000GBP/m",
  status: "Blank",
};

let data3 = {
  company: "Vertigo",
  role: "Chef",
  salary: "9.50GBP/hr",
  status: "Blank",
};

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
      <JobListings data={data} data2={data2} data3={data3} />
    </div>
  );
}

export default App;
