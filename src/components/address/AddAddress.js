import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddAddress = () => {
  let history = useHistory();
  const [address, setAddress] = useState({
    street: "",
    suite: "",
    city: "",  
    zipcode: ""
  });

  const { street, suite, city, zipcode } = address;
  const onInputChange = e => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", address);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Address</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Street"
              name="street"
              value={street}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Suite"
              name="suite"
              value={suite}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your City"
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your ZipCode"
              name="zipcode"
              value={zipcode}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Address</button>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;
