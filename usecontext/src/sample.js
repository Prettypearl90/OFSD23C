import { useState, createContext, useContext } from "react";



const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("OFSD23C");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <p>Mode: Offline</p>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
       <p>Count: 18</p>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
       <p>Course: FullStack</p>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
       <p>Topic : ReactHook</p>
      <p>{`Batch Name: ${user}`}</p>
    </>
  );
}
