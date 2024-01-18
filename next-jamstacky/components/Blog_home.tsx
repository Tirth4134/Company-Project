import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import Link from "next/link";
import React from "react";

interface Iblog {
  _id: string;
  heading: string;
  by_name_date: string;
  description: string;
  read_more: string;
  image: string;
  label: any;
  slug: any;
}

async function getData() {
  const query = `*[_type == 'blog_home']{
        _id,
        heading,
        by_name_date,
        description,
        read_more,
        image,
    }`;
  const data = await client.fetch(query);
  return data as Iblog[];
}

const Blog_home = async () => {
  const data = (await getData()) as Iblog[];
  console.log(data);

  return (
    <div>
      {data.map((item: any) => {
        return (
          <div>
            <div className="py-8 block md:flex justify-between items-center  md:gap-[1.5rem] gap-0 ">
              <div className="w-full md:w-3/5 max-w-full md:max-w-[40em] z-0">
                <div>
                  {/* <h1 className="text-[1.82rem]  md:text-[2.125rem] emd:text-[2.516rem] xl:text-[2.875rem] leading-[1.25em] text-dark-blue mb-2  font-semibold  font-DM">
                    {item?.heading}
                  </h1> */}
                </div>
                <div className="flex font-DM">
                  <p className="border-r-[0.0625em] border-dark-blue text-sm xl:text-base font-normal text-dark-gray-shade font-inter pr-3 pb-0">
                    {item?.by_name_date}
                  </p>
                </div>
                <div className="font-Inter my-4 [&amp;>a]:bg-dark-pink [&amp;>a]:text-white-color [&amp;>a]:inline-flex [&amp;>a]:text-sm xl:[&amp;>a]:text-base [&amp;>a]:font-medium [&amp;>a]:rounded-[5em] [&amp;>a]:py-[0.6em] md:[&amp;>a]:py-3  [&amp;>a]:px-8 md:[&amp;>a]:mt-[1.2em] hover:[&amp;>a]:bg-dark-blue [&amp;>a]:font-DM ">
                  <p className="text-base md:text-lg font-normal text-dark-blue">
                    {item?.description}
                  </p>
                  <Link
                    className="text-[1.125em] font-bold leading-[1.25em] text-white-color bg-pink-700 inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center"
                    href={item?.read_more?.slug?.current}
                  >
                    {item?.read_more?.label}
                  </Link>
                </div>
              </div>
              <div className="bloglisthero-right w-[70%] md:w-2/5 ml-auto mr-auto md:mr-0 flex justify-center md:justify-end z-0 [&amp;>img]:max-w-[26.125em] [&amp;>img]:max-h-[26.125em] mt-0">
                <img
                  src={urlFor(item?.image).url()}
                  width={400}
                  height={300}
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

export default Blog_home;
