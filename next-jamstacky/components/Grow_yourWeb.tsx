import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Icompare {
  _id: string;
  title: string;
  description: PortableTextBlock[];
  image: string;
}

async function getData() {
  const query = `*[_type == 'grow_yourself']{
    _id,
    title,
    description,
    image,
}`;
  const data = await client.fetch(query);
  return data as Icompare[];
}

const Grow_yourWeb = async () => {
  const data = (await getData()) as Icompare[];
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div className="px-10 mb-16" key={item?._id}>
            <div className="font-dmSans [&>p]:pt-4 esm:[&>p]:pt-[0] [&>p]:text-base em:[&>p]:text-lg md:[&>p]:text-xl [&>p]:font-medium [&>p]:text-blue [&>p]:opacity-75 [&>p>code]:font-bold [&>p>code]:text-pink-600">
              <h5 className="font-dmSans flex items-center text-pink-700 [&>img]:max-w-[3em] text-[20px] esm:text-[22px] sm:text-[26px] md:text-[30px] xl:text-[34px] mb-[0.5em] ">
                {item?.title}
                <div className="[&>img]:rotate-[25deg]">
                  <img
                    src={urlFor(item?.image).url()}
                    width={100}
                    height={80}
                    alt="image"
                  />
                </div>
              </h5>
              <p className="">
                <PortableText value={item?.description} />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grow_yourWeb;
