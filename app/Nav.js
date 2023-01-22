"use client";

import Image from "next/image";
import Link from "next/link";
import { BsCartFill, BsPersonCircle, BsPersonFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MainContext } from "../context/Main";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Nav = ({}) => {
  const { cartItems } = useContext(MainContext);
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const goToHome = () => {
    router.push("/");
  };

  const handleSignin = () => {
    router.push("/api/auth/signin");
  };

  const handleUserDropDown = () => {
    setUserDropDown(!userDropDown);
  };

  // useEffect
  useEffect(() => {
    userDropDown && setUserDropDown(false);
  }, [pathname]);

  return (
    <nav className="bg-[#313131] text-white px-4 p-2 relative z-20">
      <div className="flex justify-between m-auto">
        <Image
          alt={"logo"}
          src={"/images/logo.png"}
          width={50}
          height={50}
          className="rounded-full cursor-pointer"
          onClick={goToHome}
        />
        <ul className={"md:flex justify-center gap-10 items-center hidden"}>
          <li>
            <Link href="#">Featured</Link>
          </li>
          <li>
            <Link href="#">Men</Link>
          </li>
          <li>
            <Link href="#">Women</Link>
          </li>
          <li>
            <Link href="#">Kids</Link>
          </li>
          <li>
            <Link href="#">Sale</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <div className={"md:hidden"}>
            {open ? (
              <FaTimes
                color="white"
                onClick={() => setOpen(!open)}
                size={25}
                className="cursor-pointer"
              />
            ) : (
              <FaBars
                color="white"
                size={25}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
          {status !== "loading" && status == "unauthenticated" ? (
            <div
              onClick={handleSignin}
              className="flex border-2 text-md items-center p-2 rounded-lg cursor-pointer"
            >
              <p className="mr-2">Sign In</p>
              <BsPersonFill color="white" size={25} />
            </div>
          ) : (
            <>
              <div className="relative">
                <BsPersonCircle
                  className="cursor-pointer"
                  color="white"
                  size={25}
                  onClick={handleUserDropDown}
                />
              </div>
              {userDropDown && (
                <div className="absolute top-16 w-36 right-5 bg-white rounded-2xl text-[#313131]">
                  <div className="flex flex-col justify-center items-center font-medium border-2 border-[#313131]">
                    <div className="flex items-center justify-center">
                      <span className="text-lg px-2.5 py-2">&#128075;</span>
                      <p className="font-bold px-2.5">
                        {session && session.user && session.user.name}
                      </p>
                    </div>
                    <Link href="/history/orders" className="px-5 py-2">
                      My Orders
                    </Link>

                    <Link href="/api/auth/signout" className="px-5 py-2">
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
          <div className="relative">
            <BsCartFill
              color="white"
              size={25}
              className="ml-3 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        {open && (
          <ul className="grid grid-cols-1 gap-5 mt-4">
            <Link
              href="#"
              className="h-10  flex justify-center items-center py-10 border-b-2"
              onClick={() => setOpen(!open)}
            >
              Featured
            </Link>

            <Link
              className="h-10  flex justify-center items-center py-10 border-b-2"
              href="#"
              onClick={() => setOpen(!open)}
            >
              Men
            </Link>

            <Link
              className="h-10  flex justify-center items-center py-10 border-b-2"
              href="#"
              onClick={() => setOpen(!open)}
            >
              Women
            </Link>

            <Link
              className="h-10  flex justify-center items-center py-10 border-b-2"
              href="#"
              onClick={() => setOpen(!open)}
            >
              Kids
            </Link>

            <Link
              className="h-10  flex justify-center items-center py-10 mb-4"
              href="#"
              onClick={() => setOpen(!open)}
            >
              Sale
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
