import React, { useState, useEffect } from 'react';
import "../../style/JobForm.css";

const JobForm = ({ onAdd, editData, onCancel }) => {
  const [form, setForm] = useState({
    companyName: '',
    jobTitle: '',
    applicationDate: '',
    status: 'Applied'
  });

  const [error, setError] = useState('');
  const todayDate = new Date().toISOString().split('T')[0];

  // 🪄 When editing — pre-fill the form
  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputDate = new Date(form.applicationDate);
    const today = new Date();

    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (
      form.companyName.length < 3 ||
      !form.jobTitle ||
      !form.applicationDate ||
      inputDate > today
    ) {
      setError('Please fill correctly — company name ≥ 3 letters, and date ≤ today.');
      return;
    }

    onAdd(form);

    // reset only if adding (not editing)
    if (!editData) {
      setForm({
        companyName: '',
        jobTitle: '',
        applicationDate: '',
        status: 'Applied'
      });
    }
  };

  return (
    <div className='outerContainerForm'>
      <h1>{editData ? "Edit Application" : "Application Form"}</h1>
      <div className='innerContainerForm'>
        <form onSubmit={handleSubmit} className='forms'>
          <input 
            type="text" 
            name="companyName"
            placeholder='Company name: Eg., Microsoft'
            value={form.companyName}
            onChange={handleChange}
            required
          />

          <input 
            type="text"
            name="jobTitle"
            placeholder="Job Title: Eg., AWS Engineer"
            value={form.jobTitle}
            onChange={handleChange}
            required
          />

          <input 
            type="date"
            name="applicationDate"
            value={form.applicationDate}
            max={todayDate}
            onChange={handleChange}
            required
          />

          <select
            name="status" 
            value={form.status}
            onChange={handleChange}
            required
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          <div className="buttonRow">
            <button type='submit' className='add'>
              {editData ? "UPDATE" : "APPLY"}
            </button>
            {editData && (
              <button type='button' className='cancel' onClick={onCancel}>Cancel</button>
            )}
          </div>
        </form>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default JobForm;
