"use client";

import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import React, { useState } from "react";

interface Itech {
  technologyList: any;
  title: string;
  label:any;
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
  console.log(techType);

  const data = await getList();
  // console.log(data);

  return (
    <div>
      {data.map((item: any) => {
        console.log(item?.techTypeButton);

        return (
          <div>
            <div>{item?.title}</div>
            <div className="flex gap-6">
              {item?.techTypeButton.map((btn: any) => {
                console.log(btn);
                return (
                  <li className="w-fit relative text-center md:text-start ">
                    <label
                      htmlFor={btn.label}
                      className="outline-none text-buttoncolor font-[500] border-b-[0.125rem] border-b-transparent hover:border-titlecolor hover:opacity-100 text-[0.875rem]  mb:text-[0.9rem] md:text-[1rem] group-hover:opacity-100
                                 cursor-pointer        "
                    >
                      {btn.label}
                    </label>
                    <input
                      type="text"
                      id={btn.label}
                      value={btn.label}
                      readOnly
                      onClick={handlefechlist}
                      className="w-full  focus:border-titlecolor bg-transparent  hidden  "
                    />
                  </li>
                );
              })}
            </div>

            <div className="grid grid-cols-8 gap-2">
              {techType === null
                ? item.technologyList.map((list: any) => {
                    return (
                      <li
                        key={list._key}
                        className="flex items-center justify-center flex-col gap-[0.55rem] mx-[0.25rem]"
                      >
                        <img
                          src={urlFor(list.asset._ref).url()}
                          alt={list.alt}
                          className="w-[2.5rem] mb:w-[3rem] md:w-[4.64144rem] h-[2.1rem] mb:h-[3rem] md:h-[4.04144rem]"
                        />
                        <p className="text-titlecolor text-[0.75rem] font-[500] font-montserrat text-center ">
                          {list.title}
                        </p>
                      </li>
                    );
                  })
                : item.technologyList
                    .filter((list: any) => list.techType == techType.label)
                    .map((list: any) => {
                      return (
                        <li
                          key={list._key}
                          className="flex items-center justify-center flex-col gap-[0.55rem] mx-[0.25rem]"
                        >
                          <img
                            src={urlFor(list.asset._ref).url()}
                            alt={list.alt}
                            className=" w-[2rem] h-[2rem]  mb:w-[4.64144rem] mb:h-[4.64144rem]"
                          />
                          <p className="text-titlecolor text-[0.75rem] font-[500] font-montserrat text-center ">
                            {list.title}
                          </p>
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

