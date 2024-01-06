import React from "react";

// export default function Welcome() {
//   const msg = () => {
//     alert("Welcome to All!");
//   }

//   return (
//     <button onClick={msg}>Greeting</button>
//   );
// }

// Events with arguments

// export default function Welcome() {
//   const msg = (arg) => {
//     alert(arg);
//   }

//   return (
//     <button onClick={() => msg("Welcome to All!")}>Greeting</button>
//   );
// }

// Event object

export default function Welcome() {
  const msg = (arg, event) => {
    alert(arg);
    alert(event.type);
  }

  return (
    <button onClick={(event) => msg("Welcome to All!", event)}>Greeting</button>
  );
}
