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
  const query = `*[_type == 'web_tool_and_have_fun']{
            _id,
            title,
            description,
            image,
        }`;
  const data = await client.fetch(query);
  return data as Icompare[];
}

const Compare_yourtool_home = async () => {
  const data = (await getData()) as Icompare[];

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="my-24" key={item?._id}>
            <div className="max-w-[1220px] mx-auto py-[2em] md:py-[2.6875em] px-[2em] md:px-[3.5em] rounded-[0.625em] block md:flex justify-between align-center em:text-left items-center secondary bg-darkgradient ">
              <div className="[&>div>h5]:text-white [&>div>h5]:text-center em:[&>div>h5]:text-left [&>h5]:text-[19px] sm:[&:h5]:text-[21px] xl:[&>h5]:text-[24px]  [&>p]:font-DM  [&>p]:text-white-color [&>p]:text-sm xl:[&>p]:text-base [&>p]:text-center em:[&>p]:text-left [&>a]:rounded-[3em] [&>a]:text-sm xl:[&>a]:text-base [&>a]:font-semibold hover:[&>a]:bg-white hover:[&>a]:text-blue [&>a]:shadow-hire-btn [&>a]:py-4 esm:[&>a]:py-[1.125em] [&>a]:px-4 lsm:[&>a]:px-[1.8em] esm:[&>a]:px-10 w-full md:w-3/4 xl:pr-10  ">
                <h5 className="capitalize font-dmSans mb-2 text-white !text-[2.2640625em] sm:!text-[2.515625em] xl:!text-[2.875em] font-bold leading-tight">
                  {item?.title}
                </h5>
                <div className="  [&>p]:text-[1em]  [&>p>code]:text-pink-600 [&>a]:mt-[1em]  [&>a]:font-semibold hover:[&>a]:text-white hover:[&>a]:bg-pink-900 [&>a]:rounded-[0.625em] [&>a]:px-[1.57em] [&>a]:py-[1em] [&>a]:text-sm !max-w-full md:!max-w-[75%] text-base leading-[1.3rem] [&>p]:text-white">
                  <p>
                    <PortableText value={item?.description} />
                  </p>
                </div>
              </div>
              <div className="!mx-auto lg:ml-auto  hidden md:flex justify-center md:justify-end pt-12 md:pt-[0] [&>img]:max-w-[90%] [&>img]:ml-auto [&>img]:mr-auto lg:[&>img]:mr-0 [&>img]:h-[335px]">
                <img
                  src={urlFor(item?.image).url()}
                  width={400}
                  height={450}
                  alt="image"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Compare_yourtool_home;
