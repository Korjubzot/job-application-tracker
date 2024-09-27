/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// TODO reconfigure linter to stop these errors

function JobListings({ data, data2, data3 }) {
  return (
    // TODO turn into a for-in loop
    <div>
      <p>testing...</p>
      <table className="w-full">
        <tr>
          <th>Company</th>
          <th>Role</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>{data.company}</td>
          <td>{data.role}</td>
          <td>{data.salary}</td>
          <td>
            <select name="status" id="status" required>
              <option value="applied">Applied</option>
              <option value="rejected">Rejected</option>
              <option value="interviewing">Interviewing</option>
              <option value="accepted">Accepted</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>{data2.company}</td>
          <td>{data2.role}</td>
          <td>{data2.salary}</td>
          <td>
            <select name="status" id="status" required>
              <option value="applied">Applied</option>
              <option value="rejected">Rejected</option>
              <option value="interviewing">Interviewing</option>
              <option value="accepted">Accepted</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>{data3.company}</td>
          <td>{data3.role}</td>
          <td>{data3.salary}</td>
          <td>
            <select name="status" id="status" required>
              <option value="applied">Applied</option>
              <option value="rejected">Rejected</option>
              <option value="interviewing">Interviewing</option>
              <option value="accepted">Accepted</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default JobListings;
