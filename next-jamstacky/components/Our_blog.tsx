import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Iour_blog {
  _id: string;
  heading: string;
  blog: any;
  blog_list: string;
  blog_image: string;
  blog_button: any;
  blog_description: PortableTextBlock[];
  view_more_blogs_button: string;
  arrow_image: string;
  slug: any;
  label: any;
}

async function getData() {
  const query = `*[_type == "our_blog"]{
    _id,
    heading,
    blog,
    view_more_blogs_button,

}`;
  const data = await client.fetch(query);
  return data as Iour_blog[];
}

const Our_blog = async () => {
  const data = (await getData()) as Iour_blog[];

  return (
    <>
      {data?.map((item) => {
        return (
          <div>
            {data?.map((item) => {
              return (
                <div className="px-10 m-auto my-16" key={item?._id}>
                  <div className="max-w-[850px]  em:text-left mb-[10px] ">
                    <p className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-title-blue-shade pb-10">
                      {item?.heading}
                    </p>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-x-[2em] gap-y-[1.875em] items-center">
                    {item?.blog.map((list: any) => {
                      return (
                        <div className="" key={list?._id}>
                          <img
                            src={urlFor(list?.blog_image).url()}
                            alt="dlkjf"
                            width={400}
                            height={400}
                          />
                          <div className="my-6">
                            {list?.blog_button.map((btn: any) => {
                              return (
                                <Link
                                  key={btn?._id}
                                  href={btn?.slug?.current}
                                  className="mx-3 bg-[#F4FBFF] rounded-lg p-1"
                                >
                                  {btn?.label}
                                </Link>
                              );
                            })}
                          </div>
                          <div className="[&>h1]:text-blue [&>h1]:text-2xl [&>h1]:font-medium w-[400px] ">
                            <PortableText value={list?.blog_description} />
                          </div>

                          <img
                            src={urlFor(list?.arrow_image).url()}
                            alt="arrow"
                            width={30}
                            height={20}
                            className="mt-6"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-center">
                    <Link
                      className=" mt-[2.75em] mx-auto my-0
                inline-block bg-[#DA3654]  leading-[1.25em] font-bold  hover:bg-blue duration-700 text-white cursor-pointer text-[12.6px]  md:text-[15.75px] lg:text-[18px] px-[2em] md:px-[1.5em] py-[1em] md:py-[1em] rounded-[3.5em] mb-8"
                      href={item?.view_more_blogs_button.slug.current}
                    >
                      {item?.view_more_blogs_button.label}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Our_blog;
