"use client";

import { items } from "@/item";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ItemList = ({}) => {
  const router = useRouter();
  const handleLookUpItem = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => handleLookUpItem(item.id)}
            className="cursor-pointer"
          >
            <Image alt={item.desc} src={item.src} width={500} height={400} />
            <div className="flex justify-between p-2">
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p>{item.desc}</p>
              </div>
              <div>
                <p className="text-lg">${item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
