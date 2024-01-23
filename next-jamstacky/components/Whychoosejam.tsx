import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import React from "react";

interface IWhychoose {
  title: string;
  toolsList: any;
  _id: string;
}

async function getData() {
  const query = `*[_type == "whyChooseJam"]{
    title,
    toolsList}`;
  const data = await client.fetch(query);
  return data as IWhychoose[];
}

const Whychoosejam = async () => {
  const data = (await getData()) as IWhychoose[];

  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="max-w-[76rem] m-auto flex flex-col items-center md:items-start"
          >
            <h2 className="text-[1.2rem] sm:text-[1.5rem] md:text-[2.15rem] md:text-left text-center  font-[500] text-blue capitalize max-w-[75rem] my-[1rem] font-dmSans">
              {item.title}
            </h2>
            <ul className="grid grid-cols-3 place-items-center place-item-center mb:flex items-center justify-center flex-wrap mt-[1.5rem] gap-[1rem] mb:gap-[2rem] md:gap-[3.76rem] mb:mt-[5rem] ">
              {item.toolsList.map((list: any) => {
                return (
                  <li
                    key={list._key}
                    className=" flex items-center justify-center flex-col gap-[0.94rem] mb-[0.5rem]  mb:mb-[2rem]  "
                  >
                    <div className="bg-blue p-[1rem] md:p-[1.23rem] flex  items-center justify-center max-w-[6.5em] w-[3rem] mb:w-[4rem] md:w-[5.625rem] h-[3rem]  mb:h-[4rem] md:h-[5.625rem] m-auto rounded-radius hover:rounded-hoverradius  transition-all ease-in-out duration-300">
                      <img
                        src={urlFor(list.asset._ref).url()}
                        alt={list.alt}
                        className=" max-w-[1.5rem] mb:max-w-[2rem] md:max-w-[2.97094rem] h-[2.97094rem]"
                      />
                    </div>
                    <p className=" text-[0.8rem] mb:text-[0.9rem] md:text-[1rem] text-blackcolor font-montserrat text-center tracking-[0.025rem] font-[500]">
                      {list.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Whychoosejam;
