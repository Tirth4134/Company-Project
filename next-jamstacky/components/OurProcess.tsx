import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import React from "react";

interface IOurPro {
  _id: string;
  heading: string;
  title: string;
  processTrack: any;
  tool: string;
  time_image: string;
}

async function getData() {
  const query = `*[_type == "ourProcess"]{
        _id,
        heading,
        title,
        processTrack,
		time_image,
    }`;
  const data = await client.fetch(query);
  return data as IOurPro[];
}

const OurProcess = async () => {
  const data = (await getData()) as IOurPro[];
  return (
    <div>
      {data.map((content) => {
        return (
          <div
            className="max-w-[90rem] m-auto  my-[4rem] mb:my-[9rem]"
            key={content?._id}
          >
            <div className="px-[1rem] w-full mb:inline-block flex flex-col  items-center mb:items-start justify-center mb:justify-start">
              <h1 className="after:absolute after:bg-lightblue after:w-[1em] md:after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em] before:absolute before:bg-lightblue before:w-[1em] md:before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-lightblue  tracking-wider relative inline-block px-[2em] md:px-[3em] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-dmSans">
                {content.heading}
              </h1>
              <h2 className="text-[2.125rem] text-titlecolor my-[1rem] leading-[2.65625rem] text-center mb:text-left = md:max-w-[57.75rem] font-dmSans font-[500]">
                {content.title}
              </h2>
              <ul className=" grid  place-items-center  grid-cols-2 mb:grid-cols-3  md:flex md:items-center md:justify-between [&>*:nth-child(6)]:w-fit [&>*:nth-child(3)]:after:border-red-500 [&>*:nth-child(2)]:after:border-red-500 [&>*:nth-child(1)]:after:border-red-500 [&>*:nth-child(6)]:after:left-0 flex-wrap md:flex-nowrap relative after:border-2 after:border-black after:w-[98%]  md:after:flex after:absolute after:z-[-1] after:top-[53%] after:left-[3%] after:hidden ">
                {content.processTrack.map((list: any, i: number) => {
                  let listNum;
                  if (i >= 0 && i < 10) {
                    listNum = `0${i + 1}`;
                  } else {
                    listNum = `${i + 1}`;
                  }
                  return (
                    <div key={list._key}>
                      <div
                        key={list._key}
                        className=" flex  items-center  flex-col gap-[0.9rem] after:overflow-hidden  "
                      >
                        <img
                          src={urlFor(list.asset._ref).url()}
                          alt={list.alt}
                          className="w-[3.125rem]"
                        />
                        <span className=" bg-blue ml-[0.5rem]   z-[1] rounded-[50%]  flex items-center justify-center w-[2.063rem] h-[2.063rem] py-[0.5rem]  px-[0.6rem] text-[0.83388rem] font-montserrat text-whitecolor font-[600]">
                          {listNum}
                        </span>
                        <p className="text-[1.04238rem] font-[600] leading-[1.31013rem] font-montserrat text-blue">
                          {list.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-center items-center pt-20">
              <img
                src={urlFor(content?.time_image).url()}
                alt="time-image"
                className="rounded-3xl border border-red-500"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurProcess;
