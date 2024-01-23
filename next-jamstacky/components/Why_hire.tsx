import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import React from "react";

interface IWhy {
  _id: any;
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
  return (
    <div className="my-[3rem] mb:my-[7.5rem] mx-[1rem] relative px-10">
      {data.map((item) => {
        return (
          <div key={item?._id}>
            <h2 className="font-medium leading-[2.25rem] text-[20px] lg:text-[24px] xl:text-[28px] font-dmSans text-blue w-2/3">
              {item.title}
            </h2>
            <ul className="flex flex-col">
              <div className="my-[1rem] mb:my-[3.5rem] flex items-center md:justify-around  mb:flex-row  flex-col  flex-wrap md:flex-nowrap justify-center gap-[1rem] mb:gap-[3rem] lg:gap-[6rem]">
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
