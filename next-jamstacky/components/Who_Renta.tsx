import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PortableTextBlock } from "sanity";

interface IWho_renta {
  _id: any;
  title: string;
  description: PortableTextBlock[];
  image: string;
}

async function getData() {
  const query = `*[_type == "who_are_renta"]{
        title,
         description,
          "image":image.asset->url,
      }`;
  const data = await client.fetch(query);
  return data as IWho_renta[];
}

const Who_Renta = async () => {
  const data = (await getData()) as IWho_renta[];

  return (
    <div>
      {data.map((item: any) => {
        return (
          <div key={item?._id}>
            <div className="max-w-[850px] mt-[0] pl-7 pt-20">
              <div>
                <p className="font-medium leading-[1.25rem] uppercase text-lightblue tracking-wider inline-block mb-[1rem] px-[2rem] md:px-[3rem] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-dmSans">
                  - {item?.title} -
                </p>
              </div>
            </div>
            <div className="mt-4 em:mt-12 items-center w-[100%] mx-auto  flex flex-col md:flex-row ">
              <div className="w-full em:w-[70%] sm:w-1/2 mb-8 sm:mb-12 md:mb-[0]  ">
                <img
                  src={urlFor(item?.image).url()}
                  width={303.99}
                  height={74.15}
                  alt="renta"
                  className="max-w-[60%] mr-auto ml-auto"
                />
              </div>
              <div className=" [&>ul]:max-w-[85%] text-left [&>ul>li]:list-disc [&>ul>li]:pt-4 [&>ul>li]:text-lg [&>ul>li]:text-blue [&>ul>li]:opacity-60">
                <PortableText value={item?.description} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Who_Renta;
