import React from "react";

const EmpList = ({ employees, handleView }) => {
  return (
    <div className="main-container --flex-center">
      <div className="--text-center">
        <h2>Employee Data</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Job</th>
              <th>Office</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => {
              const { id, name, job, office } = emp;
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{job}</td>
                  <td>{office}</td>
                  <td className="td-btn">
                    <button
                      onClick={() => handleView(emp.id)}
                      className="--btn --p2 --btn-primary"
                    >
                      View more
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpList;

// const EmpTable = ({ handleView }) => {
//   return (

//   );
// };

// export default EmpTable;
