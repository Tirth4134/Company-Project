import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Iagency {
  _id: string;
  heading: string;
  description: PortableTextBlock[];
  traning_image: string;
  list: any;
  agency_list: any;
  image: string;
  image_name: string;
}

async function getData() {
  const query = `*[_type == "jamstackagency"]{
        _id,
        heading,
        description,
        traning_image,
        list,
    }`;
  const data = await client.fetch(query);
  return data as Iagency[];
}

const Jamstackagency = async () => {
  const data = (await getData()) as Iagency[];

  return (
    <div>
      {data.map((item: any) => {
        return (
          <div className="container px-10" key={item?._id}>
            <div className="flex items-start md:items-center justify-center   gap-[2rem] mt-[1rem] px-10  ">
              <div className="flex items-center md:items-start justify-center flex-col gap-[1.3rem]  mb-[3rem] w-2/4 sts:w-1/2  sts:max-w-[38rem] mx-auto md:mx-0 ">
                <h2 className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.559rem] md:text-left text-center  font-[600] text-blue capitalize  leading-[130.9%]  font-dmSans sts:max-w-[32.25rem]">
                  {item.heading}
                </h2>
                <div className="[&>p]:text-[0.93538rem] [&>p]:text-[#222549] [&>p]:pb-[1.3rem] [&>p]:text-montserrat [&>p]:leading-[180%] [&>p]:opacity-75 sts:max-w-[36.63625rem] w-full md:[&>p]:text-left ">
                  <PortableText value={item.description} />
                </div>
                <div className="grid grid-cols-2 m-auto md:mx-0 mb:grid-cols-4 gap-x-[3rem] pt-24 w-fit">
                  {item?.list.map((detail: any) => {
                    return (
                      <div
                        key={detail._id}
                        className="flex flex-col items-center gap-[1rem] justify-start flex-wrap"
                      >
                        <div className="flex items-center justify-center py-[0.4rem] px-[0.5rem] w-[3rem] sm:w-[4.1rem] h-[3rem] sm:h-[4.1rem] bg-whitecolor rounded-[0.5190rem] shadow-md">
                          <img
                            src={urlFor(detail.image).url()}
                            alt="image"
                            className="flex items-center justify-center w-[2rem]  sm:w-[3.125rem] h-[2rem]  sm:h-[3.125rem] bg-[#FFF]"
                          />
                        </div>
                        <p className="text-[0.8314rem] text-blue text-center font-[600] font-montserrat whitespace-nowrap">
                          {detail.image_name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center justify-center mx-auto  md:w-[29.57rem] md:max-h-[32rem]">
                <img
                  src={urlFor(item.traning_image).url()}
                  alt=""
                  className="max-w-[29.257rem] w-full"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Jamstackagency;
