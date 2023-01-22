"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import MainContextProvider from "../context/Main";
import Nav from "./Nav";

// const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
// import MainContextProvider from "../context/Main";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`text-[#313131]`}>
        <SessionProvider session={session}>
          <MainContextProvider>
            <div className="container m-auto">
              <Nav />
              {children}
            </div>
          </MainContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
