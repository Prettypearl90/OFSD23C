// EmployeeList.js
import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Employee from './Employee';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [newEmployeePosition, setNewEmployeePosition] = useState('');

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('employees')
      .onSnapshot((snapshot) => {
        const newEmployees = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEmployees(newEmployees);
      });

    return () => unsubscribe();
  }, []);

  const handleAddEmployee = async () => {
    try {
      await firebase.firestore().collection('employees').add({
        name: newEmployeeName,
        position: newEmployeePosition,
      });
      setNewEmployeeName('');
      setNewEmployeePosition('');
    } catch (error) {
      console.error('Error adding employee:', error.message);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Employee employee={employee} />
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Employee Name"
          value={newEmployeeName}
          onChange={(e) => setNewEmployeeName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Employee Position"
          value={newEmployeePosition}
          onChange={(e) => setNewEmployeePosition(e.target.value)}
        />
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>
    </div>
  );
};

export default EmployeeList;
