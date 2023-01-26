import React, { useState } from "react";
import "./AuthContainer.scss";
import EmpList from "./employee/EmpList";
import EmpView from "./employee/EmpView";
import empData from "./employee/empData.js";

const DashBoard = () => {
  const [employees, setEmployees] = useState(empData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [viewEmployee, setViewEmployee] = useState(false);

  const handleView = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setViewEmployee(true);
  };

  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {!viewEmployee && (
          <EmpList employees={employees} handleView={handleView} />
        )}
        {viewEmployee && (
          <EmpView
            SelectedEmployee={selectedEmployee}
            setViewEmployee={setViewEmployee}
            setEmployees={setEmployees} 
          />
        )}
      </div>
    </section>
  );
};

export default DashBoard;
