import { useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "../style/App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null); // for "See" popup
  const [editIndex, setEditIndex] = useState(null); // for editing

  // ➕ Add Job
  const addJob = (job) => {
    if (editIndex !== null) {
      // If editing, replace existing job
      const updatedJobs = [...jobs];
      updatedJobs[editIndex] = job;
      setJobs(updatedJobs);
      setEditIndex(null);
    } else {
      setJobs([...jobs, job]);
    }
  };

  // 🗑️ Delete Job
  const deleteJob = (index) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      const updatedJobs = jobs.filter((_, i) => i !== index);
      setJobs(updatedJobs);
    }
  };

  // ✏️ Edit Job
  const editJob = (index) => {
    setEditIndex(index);
    setShowForm(true); // show form when editing
  };

  // 👁️ See Job
  const viewJob = (index) => {
    setSelectedJob(jobs[index]);
  };

  // 🔙 Close Popup
  const closePopup = () => setSelectedJob(null);

  // 🌀 Cancel Edit
  const cancelEdit = () => {
    setEditIndex(null);
    setShowForm(false);
  };

  return (
    <div>
      <div className="navigationsHeader">
        <h1>Personal Interview Tracker</h1>
        <button className="apply" onClick={() => setShowForm((prev) => !prev)}>
          {showForm ? "CANCEL" : "ADD JOB"}
        </button>
      </div>

      {/* ✅ Add/Edit Form */}
      {showForm && (
        <div className="jobforms">
          <JobForm
            onAdd={addJob}
            editData={editIndex !== null ? jobs[editIndex] : null}
            onCancel={cancelEdit}
          />
        </div>
      )}

      <hr style={{ margin: "24px 0" }} />

      {/* 🧾 Job List */}
      <JobList jobs={jobs} onEdit={editJob} onDelete={deleteJob} onView={viewJob} />

      {/* 👁️ Popup */}
      {selectedJob && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>{selectedJob.companyName}</h2>
            <p><strong>Job Title:</strong> {selectedJob.jobTitle}</p>
            <p><strong>Status:</strong> {selectedJob.status}</p>
            <p><strong>Applied Date:</strong> {new Date(selectedJob.applicationDate).toLocaleDateString()}</p>
            <button className="close-popup" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
