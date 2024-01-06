import { useState } from "react";


export default function Component1() {
    const [user, setUser] = useState("OFSD23C");
  
    return (
      <>
        <h1>{`Hello ${user} Students!`}</h1>
        <Component2 user={user} />
      </>
    );
  }
  
  function Component2({ user }) {
    return (
      <>
        <p>Mode: Offline</p>
        <Component3 user={user} />
      </>
    );
  }
  
  function Component3({ user }) {
    return (
      <>
        <p>This session is about React - useContext</p>
        <Component4 user={user} />
      </>
    );
  }
  
  function Component4({ user }) {
    return (
      <>
        <p>useContext is one of the React Hook</p>
        <Component5 user={user} />
      </>
    );
  }
  
  function Component5({ user }) {
    return (
      <>
        <p>React Context is a way to manage state globally.</p>
        <p>{`Batch Name: ${user}`}</p>
      </>
    );
  }