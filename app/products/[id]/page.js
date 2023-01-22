import Image from "next/image";
import { use } from "react";
import { items } from "../../../item.js";
import Sizing from "./Sizing.js";

async function getItem(id) {
  const item = items.filter((item) => item.id == id);
  return item;
}

const DynamicPage = async ({ params: { id } }) => {
  const [item] = await getItem(id);

  return (
    <div className="max-w-5xl m-auto mt-5 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly">
      <Image
        key={item.id}
        alt={item.name}
        src={item.src}
        width={400}
        height={400}
        priority
      />
      <div className="flex flex-col text-center justify-center items-center mt-3 lg:h-1/1 lg:justify-evenly">
        <div>
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p>{item.desc}</p>
        </div>
        <div>
          <p className="text-lg mt-2 font-medium">${item.price}</p>
        </div>
        <Sizing item={item} />
      </div>
    </div>
  );
};

export default DynamicPage;
