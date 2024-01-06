import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a context provider
const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('Guest');

  const updateUserName = (newName) => {
    setUserName(newName);
  };

  return (
    <UserContext.Provider value={{ userName, updateUserName }}>
      {children}
    </UserContext.Provider>
  );
};

// Child component that consumes the context
const GreetingComponent = () => {
  // Use useContext to access the context value
  const { userName } = useContext(UserContext);

  return <p>Hello, {userName}!</p>;
};

// Another child component that updates the context value
const UpdateNameComponent = () => {
  // Use useContext to access the context value and update function
  const { updateUserName } = useContext(UserContext);

  const handleNameChange = () => {
    const newName = prompt('Enter your name:');
    if (newName) {
      updateUserName(newName);
    }
  };

  return <button onClick={handleNameChange}>Change Name</button>;
};

// App component that wraps the components with the context provider
const App = () => {
  return (
    <UserProvider>
      <div>
        <GreetingComponent />
        <UpdateNameComponent />
      </div>
    </UserProvider>
  );
};

export default App;
