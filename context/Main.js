"use client";

import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

const MainContentProvider = ({ children }) => {
  const [notified, setNotified] = useState("");
  //useEffect
  useEffect(() => {
    setTimeout(() => {
      setNotified("");
    }, 3000);
  }, [notified]);

  return (
    <MainContext.Provider value={{ notified, setNotified }}>
      {children}
      {notified && (
        <p className="bg-[#313131] text-white absolute bottom-0 w-full p-5 shadow-md text-center border-red-500">
          {notified}
        </p>
      )}
    </MainContext.Provider>
  );
};

export default MainContentProvider;
