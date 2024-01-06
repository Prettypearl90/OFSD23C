// // App.js
// import React, { useState, useEffect } from 'react';
// import firebase from './firebase';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // useEffect(() => {
//   //   const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
//   //     if (authUser) {
//   //       // User is signed in.
//   //       setUser(authUser);
//   //     } else {
//   //       // User is signed out.
//   //       setUser(null);
//   //     }
//   //   });

//   //   // Cleanup the listener on unmount
//   //   return () => unsubscribe();
//   // }, []);

//   const handleSignIn = async () => {
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       alert("Login successfully!")
//     } catch (error) {
//       console.error('Error signing in:', error.message);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await firebase.auth().signOut();
//     } catch (error) {
//       console.error('Error signing out:', error.message);
//     }
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <p>Welcome, {user.email}!</p>
//           <button onClick={handleSignOut}>Sign Out</button>
//         </div>
//       ) : (
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//           <button onClick={handleSignIn}>Sign In</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


import React from 'react';
import Auth from './auth';
 
function App() {
  return (
    <div>
      <h1>My Firebase App</h1>
      <Auth />
    </div>
  );
}
 
export default App;
 