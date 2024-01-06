
 
import React, { useState, useEffect } from 'react';
import {auth} from "./firebase*"
 
const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
 
  const handleAuthAction = async () => {
    try {
      if (isSignIn) {
        await auth.signInWithEmailAndPassword(email, password);
        console.log('Signed in successfully!');
      } else {
        await auth.createUserWithEmailAndPassword(email, password);
        console.log('Signed up successfully!');
      }
      setEmail('');
      setPassword('');
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error('Authentication error:', error.message);
    }
  };
 
  const handleSignOut = () => {
    auth.signOut();
    console.log('Signed out successfully!');
  };
 
  return (
    <div>
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      {user ? (
        <div>
          <p>Hello, {user.email}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <label>Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button onClick={handleAuthAction}>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <button onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Switch to Sign Up' : 'Switch to Sign In'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
};
 
export default Auth;
 