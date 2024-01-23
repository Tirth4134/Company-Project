import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PortableTextBlock } from "sanity";

interface IWhat_build {
  _id: string;
  title: string;
  building_detail: any;
  description: PortableTextBlock[];
  image: string;
}

async function getData() {
  const query = `*[_type == "what_we_build"]{
          title,
          building_detail,   
        }`;
  const data = await client.fetch(query);
  return data as IWhat_build[];
}

const What_we_build = async () => {
  const data = (await getData()) as IWhat_build[];

  return (
    <div>
      {data.map((item: any) => {
        return (
          <div key={item?._id}>
            <h4 className="text-center font-medium leading-[1.25rem] uppercase text-lightblue tracking-wider mb-[1rem] px-[2rem] md:px-[3rem] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-dmSans">
              - {item?.title} -
            </h4>
            <div>
              {item?.building_detail.map((list: any) => {
                return (
                  <div
                    className="flex pt-12 px-10 justify-center items-center gap-14"
                    key={list?._id}
                  >
                    <div className="w-2/3">
                      <PortableText value={list?.description} />
                    </div>
                    <div>
                      <img
                        src={urlFor(list?.image).url()}
                        width={250}
                        height={150}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default What_we_build;
