"use client";

import { useRef, useState, useContext } from "react";
import { MainContext } from "@/context/Main";
import { v4 as uuid } from "uuid";

const Sizing = ({ item }) => {
  const { notified, setNotified } = useContext(MainContext);
  const [sizeChosen, setSizeChosen] = useState("");
  const ref = useRef();
  const handleRef = (e) => {
    setSizeChosen(e.target.textContent);
    console.log(e.target.textContent);
  };
  const handleSetCartItems = async () => {
    const data = { ...item, size: sizeChosen };
    try {
      const res = await fetch("/api/addToCart", {
        method: "POST",
        body: JSON.stringify({ id: uuid(), ...data }),
      });
      setNotified("Added to Cart!");
    } catch (e) {
      throw e;
    }
  };
  return (
    <div className="mb-2 w-full flex flex-col justify-center">
      <p className="text-left w-2/4 font-medium">Size</p>
      <div className="grid grid-cols-5 gap-2 rounded-xl">
        {item.category == "shoes"
          ? Array.from(Array(17)).map((i, x) => {
              if (x > 6) {
                return (
                  <p
                    onClick={(e) => handleRef(e)}
                    className={` ${
                      sizeChosen == x && "text-gray-600 border-[#313131]"
                    } flex justify-center p-2 px-3 border-2 cursor-pointer hover:border-[#313131]`}
                    key={x}
                    ref={ref}
                  >
                    {x}
                  </p>
                );
              }
            })
          : item.category == "clothing" && (
              <div className="flex text-center">
                <p
                  onClick={(e) => handleRef(e)}
                  className={` ${
                    sizeChosen == "Small" &&
                    "text-gray-600 border-[#313131] font-bold"
                  } flex justify-center p-2 px-3 border-2 cursor-pointer hover:border-[#313131]`}
                >
                  Small
                </p>
                <p
                  onClick={(e) => handleRef(e)}
                  className={` ${
                    sizeChosen == "Medium" &&
                    "text-gray-600 border-[#313131] font-bold"
                  } flex justify-center p-2 px-3 border-2 cursor-pointer hover:border-[#313131]`}
                >
                  Medium
                </p>
                <p
                  onClick={handleRef}
                  className={` ${
                    sizeChosen == "Large" &&
                    "text-gray-600 border-[#313131] font-bold"
                  } flex justify-center p-2 px-3 border-2 cursor-pointer hover:border-[#313131]`}
                >
                  Large
                </p>
              </div>
            )}
      </div>
      <div className="mt-3">
        <button
          onClick={handleSetCartItems}
          className="text-white p-3 px-10 mt-3 rounded-xl"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Sizing;
