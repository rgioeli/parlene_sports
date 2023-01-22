import Image from "next/image";
import ItemList from "./ItemList";

export default function Home() {
  return (
    <main className="">
      <div className="max-h-screen relative m-auto">
        <Image
          className="max-h-[calc(100vh-82px)]"
          alt={"background"}
          src={"/images/background.png"}
          height={1080}
          width={1920}
          quality={90}
        />
        <Image
          alt={"shoe"}
          className="absolute top-0 bottom-0 left-0 right-[10%] m-auto max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl"
          src={"/images/cleat1.png"}
          width={800}
          height={600}
        />
        <div className="absolute top-0 left-0 w-full h-full flex max-w-screen right-0 m-auto max-w-[1400px]">
          <div className="w-1/2">
            <div className="relative top-[20%] left-[10%]">
              <h1 className="md:text-5xl lg:text-6xl xl:text-7xl text-[#212121]">
                Parlene Sports
              </h1>
              <h3 className="mt-1 md:text-2xl lg:text-3xl text-[#212121]">
                Quality gear for your game
              </h3>
              <p className="text-md mt-3">Beginning of the new year is here</p>
              <button className="mt-7 text-white px-7">Shop All</button>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-end text-white">
            <div className="relative top-[20%] right-[10%] w-1/2">
              <h3 className="mb-2 md:text-2xl lg:text-3xl">Nike Air Zoom</h3>
              <p className="text-sm md:text-md leading-6">
                Dig into the field and gain an edge over your opponent with the
                all-new Nike Air Zooms.
              </p>
              <div className="grid grid-cols-2 gap-5 mt-5 bg-gradient-to-r from-[#313131] to-black rounded-2xl">
                <div className="border-3 border-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <p className="text-xs md:text-md">Foot Control</p>
                  <h1 className="text-3xl lg:text-5xl">9/10</h1>
                </div>
                <div className="border-3 border-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <p className="text-xs md:text-md">Comfort Longevity</p>
                  <h1 className="text-3xl lg:text-5xl">9/10</h1>
                </div>
                <div className="border-3 border-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <p className="text-xs md:text-md">Water Resistence</p>
                  <h1 className="text-3xl lg:text-5xl">10/10</h1>
                </div>
                <div className="border-3 border-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <p className="text-xs md:text-md">Durability</p>
                  <h1 className="text-3xl lg:text-5xl">9/10</h1>
                </div>
              </div>
              <button className="mt-7 text-[#313131] bg-white px-7">
                Shop Nike Air Zoom
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-10">
        <h1 className="mb-5 text-2xl">Shop All</h1>
        <ItemList />
      </div>
    </main>
  );
}
