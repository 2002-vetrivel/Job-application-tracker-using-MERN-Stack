import { useState, useEffect } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import { getJobs, addJob, updateJob, deleteJob } from './api/jobs';
import "../style/App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await getJobs();
      setJobs(res.data);
    } catch (err) {
      console.error('Fetch jobs failed', err);
    }
  };

  const viewJobHandler = (index) => {
    setSelectedJob(jobs[index]);
  };

  const addOrUpdateJob = async (job) => {
    try {
      if (editIndex !== null) {
        const id = jobs[editIndex]._id;
        const res = await updateJob(id, job);
        const updatedJobs = [...jobs];
        updatedJobs[editIndex] = res.data;
        setJobs(updatedJobs);
        setEditIndex(null);
      } else {
        const res = await addJob(job);
        setJobs([...jobs, res.data]);
      }
      setShowForm(false);
    } catch (error) {
      console.error('Add/update job failed', error);
    }
  };

  const deleteJobHandler = async (index) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;
    try {
      const id = jobs[index]._id;
      await deleteJob(id);
      setJobs(jobs.filter((_, i) => i !== index));
    } catch (err) {
      console.error('Delete job failed', err);
    }
  };

  const editJobHandler = (index) => {
    setEditIndex(index);
    setShowForm(true);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setShowForm(false);
  };

  return (
    <div>
      <div className="navigationsHeader">
        <h1>Personal Interview Tracker</h1>
        <button className="apply" onClick={() => setShowForm((prev) => !prev)}>
          {showForm ? 'Cancel' : editIndex !== null ? 'Edit Job' : 'Add Job'}
        </button>
      </div>

      {showForm && (
        <div className="jobforms">
          <JobForm
            onAdd={addOrUpdateJob}
            editData={editIndex !== null ? jobs[editIndex] : null}
            onCancel={cancelEdit}
          />
        </div>
      )}

      <JobList 
        jobs={jobs} 
        onEdit={editJobHandler} 
        onDelete={deleteJobHandler}
        onView={viewJobHandler} 
      />

      {selectedJob && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>{selectedJob.companyName}</h2>
            <p><strong>Job Title:</strong> {selectedJob.jobTitle}</p>
            <p><strong>Status:</strong> {selectedJob.status}</p>
            <p><strong>Applied Date:</strong> {new Date(selectedJob.applicationDate).toLocaleDateString()}</p>
            {selectedJob.updatedAt && (
              <p><strong>Last Modified:</strong> {new Date(selectedJob.updatedAt).toLocaleString()}</p>
            )}
            {selectedJob.description && (
              <p><strong>Description:</strong> {selectedJob.description}</p>
            )}
            <button className="close-btn" onClick={() => setSelectedJob(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
