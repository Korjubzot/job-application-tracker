/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// TODO reconfigure linter to stop these errors

function JobListings({ data }) {
  return (
    <div>
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
