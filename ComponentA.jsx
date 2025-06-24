import React, { useState } from "react";
import ComponentB from "./ComponentB";
import { createContext } from "react";

export const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("BroCode");
  return (
    <>
      <div className="border-2 p-2 mt-2 border-black">
        ComponentA
        <h1> Hello {user}</h1>
        <UserContext.Provider value={{ user, setUser }}>
          <ComponentB />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default ComponentA;
