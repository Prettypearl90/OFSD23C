import React from 'react';


 //if Statements

// const UserGreeting = ({ userRole }) => {
//     if (userRole === 'admin') {
//       return <p>Welcome, Admin!</p>;
//     } else {
//       return <p>Welcome, User!</p>;
//     }
//   };
  
 //   export default UserGreeting;

 //Ternary Operator:
 
//  const WelcomeMessage = ({ isAuthenticated }) => (
//     <div>
//       {isAuthenticated ? <p>Welcome, User!</p> : <p>Please log in to continue.</p>}
//     </div>
//  );
  
 // export default WelcomeMessage;
  
 //Logical AND Operator:
//   const UserDetails = ({ user }) => (
//     <div>
//       {user && (
//         <div>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       )}
//     </div>
//   );
  
//  export default UserDetails;


// Switch Statement:


const Statusindicator = ({ status }) => {
  let indicatorStyle;

  switch (status) {
    case 'success':
      indicatorStyle = {
        backgroundColor: 'green',
        color: 'white',
      };
      break;
    case 'warning':
      indicatorStyle = {
        backgroundColor: 'yellow',
        color: 'black',
      };
      break;
    case 'error':
      indicatorStyle = {
        backgroundColor: 'red',
        color: 'white',
      };
      break;
    default:
      indicatorStyle = {
        backgroundColor: 'gray',
        color: 'white',
      };
  }

  return (
    <div style={{ padding: '10px', borderRadius: '5px', ...indicatorStyle }}>
      Status: {status}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Statusindicator status="success" />
      {/* <Statusindicator status="warning" />
      <Statusindicator status="error" />
      <Statusindicator status="unknown" /> */}
    </div>
  );
};


export default App;


// Logical || Operator



// const ErrorComponent = ({ errorMessage }) => (
//   <div>
//     {errorMessage || <p>No errors found.</p>}
//   </div>
// );

// // Usage example
// const App = () => {
//   return (
//     <div>
//       <h1>Your Application</h1>
//       <ErrorComponent errorMessage="An error occurred. Please try again." />
//       {/* <ErrorComponent errorMessage="" />  */}
//     </div>
//   );
// };

// export default App;
