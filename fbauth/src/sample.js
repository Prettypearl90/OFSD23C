// Employee.js
import React, { useState } from 'react';
import firebase from './firebase';

const Employee = ({ employee }) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(employee.name);
  const [newPosition, setNewPosition] = useState(employee.position);

  const handleDelete = async () => {
    try {
      await firebase.firestore().collection('employees').doc(employee.id).delete();
    } catch (error) {
      console.error('Error deleting employee:', error.message);
    }
  };

  const handleToggleEdit = () => {
    setEditing(!editing);
    setNewName(employee.name);
    setNewPosition(employee.position);
  };

  const handleUpdate = async () => {
    try {
      await firebase.firestore().collection('employees').doc(employee.id).update({
        name: newName,
        position: newPosition,
      });
      setEditing(false);
    } catch (error) {
      console.error('Error updating employee:', error.message);
    }
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            value={newPosition}
            onChange={(e) => setNewPosition(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          <span>{employee.name}</span>
          <span>{employee.position}</span>
          <button onClick={handleToggleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Employee;
