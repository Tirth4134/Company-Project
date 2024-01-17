import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import React from "react";

interface IWhy {
  _id: string;
  heading: string;
  title: string;
  skillList: any;
  image: string;
  text: string;
}

async function getList(): Promise<IWhy[]> {
  const query = `*[_type == "whyhire"]{
        _id,
        heading,
        title,
        skillList
    }`;
  const data = await client.fetch(query);
  return data as IWhy[];
}

const Why_hire = async () => {
  const data = (await getList()) as IWhy[];
  console.log(data);
  return (
    <div className="my-[3rem] mb:my-[7.5rem] mx-[1rem] relative  ">
      {data.map((item) => {
        return (
          <div key={item?._id} className="">
           
            {/* <h1 className="after:absolute after:bg-lightblue after:w-[1em] md:after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em] before:absolute before:bg-lightblue before:w-[1em] md:before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em]  leading-[1.25em] uppercase text-lightblue font-[500]  relative inline-block mb-[1em] px-[2em] md:px-[3em] py-0 text-center mb:text-left   text-[1rem] mb:text-[1.375rem]  font-montserrat">
              {item.heading}
            </h1> */}

          
            <h2 className="text-[1.5rem] mb:text-left text-center mb:text-lefet mb:text-[2.15rem] font-[500] text-blue capitalize max-w-[75rem] my-[1rem] font-dmSans">
              {item.title}
            </h2>
            <ul className="flex flex-col">
              
              <div className="my-[1rem] mb:my-[3.5rem] flex items-center md:justify-between  mb:flex-row  flex-col  flex-wrap md:flex-nowrap justify-center  gap-[1rem] mb:gap-[3rem] lg:gap-[9rem]">
                {item.skillList?.map((skill: any) => {
                  return (
                    <li
                      key={skill._key}
                      className=" flex flex-col items-center justify-center gap-[1.25rem]"
                    >
                      <img
                        src={urlFor(skill.image).url()}
                        alt={skill.text}
                        className="w-[5rem]"
                      />
                      <p className="text-[1.125rem] font-dmSans font-[500] capitalize max-w-[8.75rem] text-center">
                        {skill.text}
                      </p>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Why_hire;
