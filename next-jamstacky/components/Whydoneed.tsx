import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PortableTextBlock } from "sanity";

interface IWhyneed {
  _id: string;
  heading: string;
  image: any;
  jamstack_detail: any;
  title: string;
  description: PortableTextBlock[];
}

async function getData() {
  const query = `*[_type == 'why_need_jamstack']{
    _id,
    heading,
    image,
    jamstack_detail,
  }`;
  const data = await client.fetch(query);
  return data as IWhyneed[];
}

const Whydoneed = async () => {
  const data = (await getData()) as IWhyneed[];
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div className="px-10 mt-20">
            <div className="font-medium leading-[2.25rem] text-[20px] lg:text-[24px] xl:text-[28px] font-dmSans text-blue pb-12">
              {item?.heading}
            </div>
            <div className="flex">
              <div className="flex flex-col w-2/3">
                {item?.image.map((img: any) => {
                  return (
                    <div className="flex">
                      <img
                        src={urlFor(img).url()}
                        width={328}
                        height={328}
                        alt="jam"
                      />
                    </div>
                  );
                })}
              </div>
              <div>
                {item?.jamstack_detail.map((list: any) => {
                  return (
                    <div className="">
                      <div className="py-4 [&>p]:text-blue [&>p]:opacity-70 [&>p]:text-base">
                        <h5 className="text-pink-500 text-[1.1rem] md:text-[1.25rem] font-dmSans font-medium">
                          {list?.title}
                        </h5>
                        <PortableText value={list?.description} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Whydoneed;
