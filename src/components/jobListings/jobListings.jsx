/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// TODO figure out why eslint is causing an error here, probably just some misconfiguration or a missing rc file

function JobListings({ data }) {
  return (
    <div>
      <table>
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
            <select name="status" id="status">
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
