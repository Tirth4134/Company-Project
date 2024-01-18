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
  console.log(data);
  return (
    <>
      {data?.map((item) => {
        console.log(item);
        return (
          <div>
            {data?.map((item) => {
              return (
                <div className="px-10 m-auto">
                  <div className="max-w-[850px] mt-[0] ml-auto em:ml-0 mr-auto text-center em:text-left mb-[10px] px-10 ">
                    <p className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-title-blue-shade">
                      {item?.heading}
                    </p>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-x-[2em] gap-y-[1.875em] items-start">
                    {item?.blog.map((list: any) => {
                      console.log(list?.arrow_image);
                      return (
                        <div>
                          <img
                            src={urlFor(list?.blog_image).url()}
                            alt="dlkjf"
                            width={300}
                            height={300}
                          />
                          <div>
                            {list?.blog_button.map((btn: any) => {
                              console.log(btn?.slug?.current);

                              return (
                                <Link href={btn?.slug?.current}>
                                  {btn?.label}
                                </Link>
                              );
                            })}
                          </div>
                          <PortableText value={list?.blog_description} />

                          <img
                            src={urlFor(list?.arrow_image).url()}
                            alt="arrow"
                            width={20}
                            height={10}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-center">
                    <Link
                      className=" mt-[2.75em] mx-auto my-0
                inline-block bg-[#DA3654]  leading-[1.25em] font-bold text-white cursor-pointer text-[12.6px]  md:text-[15.75px] lg:text-[18px] px-[2em] md:px-[1.5em] py-[1em] md:py-[1em] rounded-[3.5em] hover:bg-dark-blue
                text-[#fff]"
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
