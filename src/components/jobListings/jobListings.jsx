// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

function JobListings() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "jobData/user1Data");
    // this might need a / at the end

    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const fetchedData = snapshot.val();
        console.log("JOBDATA fetched from Firebase: ", fetchedData);

        const jobsArray = fetchedData ? Object.values(fetchedData) : [];
        setJobData(jobsArray);
      },
      {
        onlyOnce: true,
      }
    );

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <h1 className="align-top">Job Application Tracker</h1>
      <p className="m-4">
        You can use this tracker to input data on your job applications. Add the
        company, role, salary, and current status.
      </p>
      <p className="m-4">
        Times are tough right now. Keep your head up and remember that you are
        not your job.
      </p>
      <table className="w-full">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {jobData.length > 0 ? (
            jobData.map((item, index) => (
              <tr key={index}>
                <td>{item.company || "No data."}</td>
                <td>{item.role || "No data."}</td>
                <td>{item.salary || "No data."}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default JobListings;
