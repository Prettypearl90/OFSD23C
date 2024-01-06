import React, { useState } from "react";

const EmployeeApp = () => {
  const initialData = [
    {
      id: 1,
      name: "John Doe",
      position: "Developer",
      department: "Engineering",
    },
    { id: 2, name: "Jane Smith", position: "Designer", department: "Creative" },
    {
      id: 3,
      name: "Bob Johnson",
      position: "Manager",
      department: "Management",
    },
  ];

  const [employees, setEmployees] = useState(initialData);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    position: "",
    department: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value,
    });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (
      !newEmployee.id ||
      !newEmployee.name ||
      !newEmployee.position ||
      !newEmployee.department
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (editingId !== null) {
      // Update existing employee
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === editingId ? { ...newEmployee } : employee
        )
      );
      setEditingId(null);
    } else {
      // Add new employee
      setEmployees((prevEmployees) => [...prevEmployees, { ...newEmployee }]);
    }

    setNewEmployee({
      id: "",
      name: "",
      position: "",
      department: "",
    });
  };

  const handleEditEmployee = (employee) => {
    setEditingId(employee.id);
    setNewEmployee({ ...employee });
  };

  const handleDeleteEmployee = (employeeId) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== employeeId)
    );
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <button onClick={() => handleEditEmployee(employee)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteEmployee(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{editingId ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleAddEmployee}>
        <label>
          ID:
          <input
            type='text'
            name='id'
            value={newEmployee.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={newEmployee.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Position:
          <input
            type='text'
            name='position'
            value={newEmployee.position}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Department:
          <input
            type='text'
            name='department'
            value={newEmployee.department}
            onChange={handleInputChange}
          />
        </label>
        <button type='submit'>{editingId ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default EmployeeApp;