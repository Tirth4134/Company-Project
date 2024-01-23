import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PortableTextBlock } from "sanity";

interface IPro {
  _id: string;
  title: string;
  description: PortableTextBlock[];
  image: string;
}

async function getData() {
  const query = `*[_type == "problem"]{
        title,
         description,
          "image":image.asset->url,
      }`;
  const data = await client.fetch(query);
  return data as IPro[];
}

const Problem = async () => {
  const data = (await getData()) as IPro[];

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="pb-24">
            <div className="max-w-[850px] mt-20 px-10 pl-7  ">
              <div>
                <p className="font-medium leading-[1.25rem] uppercase text-lightblue tracking-wider inline-block mb-[1rem] px-[2rem] md:px-[3rem] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-dmSans">
                  - {item?.title} -
                </p>
              </div>
            </div>
            <div className=" w-[100%] mx-auto  flex gap-28 md:flex-row-reverse [&>div>ul>li]:list-disc [&>div>ul>li]:py-4 [&>div>li]:text-left [&>div>li]:text-2xl px-10 pl-7">
              <div className="">
                <img
                  src={urlFor(item?.image).url()}
                  width={450}
                  height={154}
                  alt="renta"
                />
              </div>
              <div className="w-[57%] pt-6 text-blue opacity-60">
                <PortableText value={item?.description} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Problem;
