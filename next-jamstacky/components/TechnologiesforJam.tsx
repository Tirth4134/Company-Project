"use client";

import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import React, { useState } from "react";

interface Itech {
  technologyList: any;
  title: string;
  label: any;
}

async function getList() {
  const query = `*[_type == "technologiesForJam"]{
    _id,
    title,
    techTypeButton,
    technologyList
  }`;
  const data = await client.fetch(query);
  return data as Itech[];
}

const TechnologiesforJam = async () => {
  const [techType, setTechType] = useState(null);

  const handlefechlist = (event: any) => {
    setTechType(event.target.value);
  };

  const data = await getList();
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div className="px-10">
            <div className="font-medium leading-[2.25rem] text-[20px] lg:text-[24px] xl:text-[28px] font-dmSans text-blue pb-12">
              {item?.title}
            </div>
            <div className="flex em:inline-block my-4 ml-8 em:my-8 mx-auto">
              {item?.techTypeButton.map((btn: any) => {
                return (
                  <li className="list-none mr-4 em:mr-8 text-sm em:text-base sm:text-lg font-medium text-pink-600 pt-[0.7rem] cursor-pointer font-dmSans ">
                    <label htmlFor={btn.label} className="">
                      {btn.label}
                    </label>
                  </li>
                );
              })}
            </div>

            <div className="grid grid-cols-8 items-center ml-6 pt-10">
              {techType === null
                ? item.technologyList.map((list: any) => {
                    return (
                      <li key={list._key} className="list-none ml-4">
                        <div className="p-2 mt-5 w-24 flex flex-col lg:w-28 h-28 items-center justify-center">
                          <img
                            src={urlFor(list.asset._ref).url()}
                            alt={list.alt}
                            className="w-[3.5rem] h-[4rem] object-contain"
                          />
                          <p className="text-center font-medium text-blue pt-4 text-xs sm:text-sm">
                            {list.title}
                          </p>
                        </div>
                      </li>
                    );
                  })
                : item.technologyList
                    .filter((list: any) => list.techType == techType.label)
                    .map((list: any) => {
                      return (
                        <li key={list._key} className="">
                          <img
                            src={urlFor(list.asset._ref).url()}
                            alt={list.alt}
                            className=""
                          />
                          <p className="">{list.title}</p>
                        </li>
                      );
                    })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologiesforJam;
