import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PortableTextBlock } from "sanity";

interface IWho_renta {
  _id: string;
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
            <div className="max-w-[850px] mt-[0] ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px]">
              <div>
                <p className="after:absolute after:bg-light-blue after:w-[1em] md:after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em] before:absolute before:bg-light-blue before:w-[1em] md:before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-light-blue  tracking-wider relative inline-block mb-[1em] px-[2em] md:px-[3em] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
                  {item?.title}
                </p>
              </div>
            </div>
            <div className="mt-4 em:mt-12 items-center w-[100%] mx-auto   flex flex-col md:flex-row [&amp;>div>p]:text-center em:[&amp;>div>p]:text-left">
              <div className="w-full em:w-[70%] sm:w-1/2 mb-8 sm:mb-12 md:mb-[0] [&amp;>img]:max-w-[60%] [&amp;>img]:mr-auto md:[&amp;>img]:mr-0 [&amp;>img]:ml-auto  [&amp;>img]:ml-auto md:[&amp;>img]:ml-0 [&amp;>img]:mr-auto">
                <img
                  src={urlFor(item?.image).url()}
                  width={755}
                  height={184}
                  alt="renta"
                />
              </div>
              <div className="w-full md:w-[70%] [&amp;>ul]:font-DM [&amp;>ul]:block [&amp;>ul]:list-none em:[&amp;>ul]:list-disc [&amp;>ul>li]:text-menu-title-text  [&amp;>ul>li]:mb-[0.625em] [&amp;>ul>li]:text-[14.175px] sm:[&amp;>ul>li]:text-[15.75px] xl:[&amp;>ul>li]:text-[18px] [&amp;>p]:text-[14.175px] sm:[&amp;>p]:text-[15.75px] xl:[&amp;>p]:text-[18px] [&amp;>p]:font-DM [&amp;>ul>li]:text-center em:[&amp;>ul>li]:text-left">
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
