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
  console.log(data);

  return (
    <div>
      {data.map((item: any) => {
        console.log(item);
        return (
          <div>
            <div className="block emd:flex justify-between font-DM">
              <div className="w-full emd:w-[45%] ">
                <h3 className=" text-[24px] em:text-[31.5px] xl:text-[36px] text-black-shade-color font-bold mb-2 sm:mb-4 leading-[1.5em] text-left font-DM tracking-[-2px]">
                  {item?.title}
                </h3>
                <div className="p-4 em:p-8 border-[1px] border-dark-gray-shade2 [&amp;>img]:w-full [&amp;>a]:w-full">
                  <a
                    className=""
                    href="/blog/nextjs-vs-gatsbyjs-key-difference-advantages-disadvantages-limitations/"
                  >
                    {/* <img alt="hero image" loading="lazy" width="1486" height="900" decoding="async"
                    data-nimg="1" srcset="https://cdn.sanity.io/images/jaqhm6yh/production/0d6813b7f0106d9bbe3927258cab6623343173e6-1486x900.png?w=1920&amp;q=100&amp;fit=clip&amp;auto=format 1x, https://cdn.sanity.io/images/jaqhm6yh/production/0d6813b7f0106d9bbe3927258cab6623343173e6-1486x900.png?w=3840&amp;q=100&amp;fit=clip&amp;auto=format 2x"
                    src="https://cdn.sanity.io/images/jaqhm6yh/production/0d6813b7f0106d9bbe3927258cab6623343173e6-1486x900.png?w=3840&amp;q=100&amp;fit=clip&amp;auto=format"
                    style="color: transparent;"> */}
                    <img src={urlFor(item?.image).url()} width={400} height={200} alt="image" />
                  </a>
                  <div className=" flex my-4">
                    <p className="border-r-[1px] border-dark-gray-shade text-xs em:text-sm font-normal pr-3 font-Inter pb-0">
                      {item?.by_name_date}
                    </p>
                  </div>
                  <div className="">
                    <a
                      className=""
                      href="/blog/nextjs-vs-gatsbyjs-key-difference-advantages-disadvantages-limitations/"
                    >
                      <h4 className="text-[16px] lsm:text-[18px] em:text-[21px] emd:text-[26.25px] xl:text-[30px] mb-2 text-black-color font-bold leading-[1.25em] font-DM">
                        {item?.heading}
                      </h4>
                    </a>
                    <p className="text-sm xl:text-base text-dark-gray-shade font-Inter font-normal pb-4">
                      {item?.description}
                    </p>
                  </div>
                  <div className="">
                    <Link
                      className="py-3 px-6 text-[12.25px] xl:text-[14px] font-medium text-white-color hover:text-white-color bg-dark-pink hover:bg-dark-blue  rounded-[3.5em] cursor-pointer "
                      href={item?.read_more?.slug?.current}
                    >
                      {item?.read_more?.label}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full emd:w-1/2 pl-2 mt-8 md:mt-12 emd:mt-0">
                <div className=" flex items-center justify-between mb-4">
                  <h3 className=" text-[24px] em:text-[31.5px] xl:text-[36px] text-black-shade-color font-bold leading-[1.5em] font-DM">
                    {item?.post_title}
                  </h3>
                  <a
                    className="text-sm lg:text-base font-normal leading-[28px] text-dark-pink hover:text-dark-blue font-Inter"
                    href="/blog/#all_blogs"
                  >
                    View All
                  </a>
                </div>
                <div>
                  {item?.post_list.map((list: any) => {
                    console.log(list?.label);
                    return (
                      <div>
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
