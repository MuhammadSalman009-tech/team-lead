import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const initialState = {
  leadName: "",
  leadCompany: "",
  leadDomain: "",
};
function AddLeadForm({ getAllLeads }) {
  const [formData, setFormData] = useState(initialState);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/leads/create", {
        ...formData,
        userID: user.id,
      })
      .then(function (response) {
        getAllLeads();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="leadName" className="form-label">
          Lead Name
        </label>
        <input
          type="text"
          className="form-control"
          id="leadName"
          name="leadName"
          value={formData.leadName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="leadCompany" className="form-label">
          Lead Company
        </label>
        <input
          type="text"
          className="form-control"
          id="leadCompany"
          name="leadCompany"
          value={formData.leadCompany}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="leadDomain" className="form-label">
          Lead Domain
        </label>
        <input
          type="text"
          className="form-control"
          id="leadDomain"
          name="leadDomain"
          value={formData.leadDomain}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddLeadForm;
