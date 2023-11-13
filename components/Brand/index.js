import React from "react";
import { Brandimg } from "../constants";
import Image from "next/image";

function Brand() {
  return (
    <div className=" relative flex justify-center overflow-hidden">
      <div className="flex items-center justify-center flex-col">
        <div className="flex w-[1200px] overflow-hidden select-none">
          <div className="flex items-center animate-scrollX">
            {Brandimg.map((array, index) => (
              <div key={index} className="grid place-items-centers min-w-[10rem] w-[1rem] md:w-[40vmin] max-w-[30rem]">
                <Image src={array.image} alt={array.image} height={120} width={120} />
              </div>
            ))}
          </div>
          <div className="flex items-center animate-scrollX">
            {Brandimg.map((array, index) => (
              <div key={index} className="grid place-items-centers min-w-[10rem] w-[1rem] md:w-[40vmin] max-w-[30rem]">
                <Image src={array.image} alt={array.image} height={120} width={120} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
