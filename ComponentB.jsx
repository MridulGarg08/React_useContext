import React from "react";
import ComponentC from "./ComponentC";

// const ComponentB = (props) => {
//   return (
//     <div className="border-2 p-2 border-black">
//       ComponentB
//       <h1>Hello {props.users}</h1>
//       <ComponentC user1="Shubhi" />
//     </div>
//   );
// };

const ComponentB = () => {
  return (
    <div className="border-2 p-2 border-black">
      ComponentB
      <h1>Hello</h1>
      <ComponentC />
    </div>
  );
};
export default ComponentB;
