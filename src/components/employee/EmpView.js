import React from "react";

const EmpView = ({ SelectedEmployee, setViewEmployee }) => {
  const changeWindow = () => {
    setViewEmployee(false);
  };

  const { id, name, job, office, phoneNumber, email, address } =
    SelectedEmployee;
  return (
    <div className="main-container --flex-center">
      <div className="user-container">
        <h1 className="--color-danger --text-center">User Info</h1>
        <h4>Id: {id}</h4>
        <h4>Name: {name}</h4>
        <h4>Job: {job}</h4>
        <h4>Office: {office}</h4>
        <h4>PhoneNumber: {phoneNumber}</h4>
        <h4>Email: {email}</h4>
        <h4>Location: {address}</h4>
        <button
          className="--btn --btn-primary --btn-block"
          onClick={changeWindow}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default EmpView;
