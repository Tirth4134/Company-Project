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
          <div>
            <div className="font-DM [&amp;>p]:pt-4 esm:[&amp;>p]:pt-[0] [&amp;>p]:text-base em:[&amp;>p]:text-lg md:[&amp;>p]:text-xl [&amp;>p]:font-medium [&amp;>p]:text-dark-blue [&amp;>p>span]:font-bold [&amp;>p>span]:text-dark-pink">
              <h5 className="font-DM flex items-center text-dark-pink [&amp;>img]:max-w-[3em] text-[20px] esm:text-[22px] sm:text-[26px] md:text-[30px] xl:text-[34px] mb-[0.5em]">
                {item?.title}
                <div>
                    <img
                  src={urlFor(item?.image).url()}
                  width={100}
                  height={80}
                  alt="image"
                />
                </div>
              </h5>
              <p>
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
