import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddCompany = () => {
  let history = useHistory();
  const [company, setCompany] = useState({
    name: ""
  });

  const { name } = company;
  const onInputChange = e => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", company);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Company</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Company</button>
        </form>
      </div>
    </div>
  );
};

export default AddCompany;
