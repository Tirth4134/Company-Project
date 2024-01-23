import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import Link from "next/link";
import React from "react";

interface Ifeature {
  _id: string;
  title: string;
  heading: string;
  by_name_date: string;
  description: string;
  read_more: string;
  post_title: string;
  post_list: any;
  post_heading: any;
  image: string;
  label: any;
  slug: any;
}

async function getData() {
  const query = `*[_type == 'feature']{
          _id,
          title,
          heading,
          by_name_date,
          description,
          read_more,
          post_title,
          post_list,
          image,
      }`;
  const data = await client.fetch(query);
  return data as Ifeature[];
}

const Featured_blog = async () => {
  const data = (await getData()) as Ifeature[];

  return (
    <div className="mb-16">
      {data.map((item: any) => {
        return (
          <div key={item?._id}>
            <div className="px-10 grid grid-cols-2 font-dmSans">
              <div className="w-full emd:w-[45%] mt-12">
                <h3 className=" text-[24px] em:text-[31.5px] xl:text-[36px] text-black-shade-color font-bold mb-2 sm:mb-4 leading-[1.5em] text-left font-DM tracking-[-2px]">
                  {item?.title}
                </h3>
                <div className="p-4 em:p-8 border-[1px] border-dark-gray-shade2 [&>img]:w-full [&>a]:w-full">
                  <a
                    className="flex items-center justify-center"
                    href="/blog/nextjs-vs-gatsbyjs-key-difference-advantages-disadvantages-limitations/"
                  >
                    <img
                      src={urlFor(item?.image).url()}
                      width={600}
                      height={400}
                      alt="image"
                    />
                  </a>
                  <div className=" flex my-4">
                    <p className="border-r-[1px] pl-[2.7rem] border-blue text-base em:text-sm font-normal pr-3 font-dmSans pb-0">
                      {item?.by_name_date}
                    </p>
                  </div>
                  <div className="pl-[2.7rem]">
                    <a
                      className=""
                      href="/blog/nextjs-vs-gatsbyjs-key-difference-advantages-disadvantages-limitations/"
                    >
                      <h4 className="text-[16px] lsm:text-[18px] em:text-[21px] emd:text-[26.25px] xl:text-[30px] mb-2 text-black-color font-bold leading-[1.25em] font-DM">
                        {item?.heading}
                      </h4>
                    </a>
                    <p className="text-sm xl:text-base text-blue font-dmSans opacity-70 font-normal pb-4">
                      {item?.description}
                    </p>
                  </div>
                  <div className="pl-[2.7rem] pt-5">
                    <Link
                      className="p-4 rounded-2xl text-[12.25px] xl:text-[14px] font-medium text-white bg-pink-600 hover:bg-blue duration-700 cursor-pointer "
                      href={item?.read_more?.slug?.current}
                    >
                      {item?.read_more?.label}
                    </Link>
                  </div>
                </div>
              </div>
              {/* All Posts */}
              <div className="w-full emd:w-1/2 pl-2 mt-8 md:mt-12 emd:mt-0">
                <div className=" flex items-center justify-between mb-4">
                  <h3 className=" text-[24px] em:text-[31.5px] xl:text-[36px] text-black-shade-color font-bold leading-[1.5em] font-DM">
                    {item?.post_title}
                  </h3>
                  <a
                    className="text-sm lg:text-base font-normal leading-[28px] text-pink-600 hover:text-blue font-dmSans"
                    href="/blog/#all_blogs"
                  >
                    View All
                  </a>
                </div>
                <div>
                  {item?.post_list.map((list: any) => {
                    return (
                      <div key={list?._id}>
                        <ul className="block ">
                          <li className="p-4 lg:p-8 pl-2 emd:pl-8 bg-[#0000]  hover:bg-[#eaf7ff]">
                            <Link className="" href={list?.slug.current}>
                              <div className="max-w-full sm:max-w-[90%]">
                                <div className=" mt-2">
                                  <h4 className="text-[20px] em:text-[21.6562px] sm:text-[26.4px] xl:text-[30px] font-bold font-DM leading-[1.3]">
                                    {list?.label}
                                  </h4>
                                </div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured_blog;
