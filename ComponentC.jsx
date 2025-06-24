import React from "react";
import ComponentD from "./ComponentD";
import { useContext } from "react";
import { UserContext } from "./ComponentA";
// const ComponentC = (props) => {
//   return (
//     <div className="border-2 border-black p-2">
//       ComponentC
//       <h1>Hello {props.user1}</h1>
//       <ComponentD user2="Sandeep" />
//     </div>
//   );
// };
const ComponentC = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="border-2 border-black p-2">
      ComponentC
      <h1>Hello</h1>
      <button onClick={() => setUser("BroBRObRO")}>Change User</button>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
