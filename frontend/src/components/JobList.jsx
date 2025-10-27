import React from "react";
import "../../style/JobList.css";

const JobList = ({ jobs, onEdit, onDelete, onView }) => {
  if (!jobs.length) {
    return <div className="no-jobs">No jobs added yet!</div>;
  }

  return (
    <div className="job-list-container">
      <h1>All Applications ({jobs.length})</h1>
      <table className="job-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Status</th>
            <th>Applied Date</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{job.companyName}</td>
              <td>{job.jobTitle}</td>
              <td className={`status ${job.status.toLowerCase()}`}>{job.status}</td>
              <td>{new Date(job.applicationDate).toLocaleDateString()}</td>
              <td className='editButtons'>
                <button className='see' onClick={() => onView(index)}>See</button>
                <button className='edit' onClick={() => onEdit(index)}>Edit</button>
                <button className='delete' onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
