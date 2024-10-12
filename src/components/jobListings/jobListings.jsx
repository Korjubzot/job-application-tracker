/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// TODO reconfigure linter to stop these errors

function JobListings({ data }) {
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.company}</td>
              <td>{item.role}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobListings;
