import React from "react";
import { useContext } from "react";
import { UserContext } from "./ComponentA";

// const ComponentD = (props) => {
//   return (
//     <div className="border-2 p-2 border-black">
//       ComponentD
//       <h1>Hello {props.user2}</h1>
//     </div>
//   );
// };

const ComponentD = (props) => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="border-2 p-2 border-black">
      ComponentD
      <h1>Hello {user}</h1>
    </div>
  );
};

export default ComponentD;
