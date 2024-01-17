import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Iwant_hire {
  _id: string;
  heading: string;
  description: PortableTextBlock[];
  book_free_conclutation: string;
  image: string;
  label: any;
  slug: any;
}

async function getData() {
  const query = `*[_type == 'want_to_hire_developer']{
          _id,
          heading,
          description,
          book_free_conclutation,
          image,
      }`;
  const data = await client.fetch(query);
  return data as Iwant_hire[];
}

const Want_hire_devloper_blog = async () => {
  const data = (await getData()) as Iwant_hire[];
  return (
    <div className=" bg-blue rounded " >
      {data.map((item: any) => {
        console.log(item);
        return (
          <div>
            <div className=" text-white max-w-[1220px] mx-auto py-[2em] md:py-[2.6875em] px-[2em] md:px-[3.5em] rounded-[0.625em] block md:flex justify-between align-center  em:text-left items-center secondary bg-comparision-gradient">
              <div className="[&amp;>div>h5]:text-white-color [&amp;>div>h5]:text-center em:[&amp;>div>h5]:text-left [&amp;>h5]:text-[19px] sm:[&amp;:h5]:text-[21px] xl:[&amp;>h5]:text-[24px]  [&amp;>p]:font-DM  [&amp;>p]:text-white-color [&amp;>p]:text-sm xl:[&amp;>p]:text-base [&amp;>p]:text-center em:[&amp;>p]:text-left [&amp;>a]:rounded-[3em] [&amp;>a]:text-sm xl:[&amp;>a]:text-base [&amp;>a]:font-semibold hover:[&amp;>a]:bg-white-color hover:[&amp;>a]:text-dark-blue [&amp;>a]:shadow-hire-btn [&amp;>a]:py-4 esm:[&amp;>a]:py-[1.125em] [&amp;>a]:px-4 lsm:[&amp;>a]:px-[1.8em] esm:[&amp;>a]:px-10 w-full md:w-3/4 xl:pr-10 !w-full md:!w-[56%]">
                <h5 className="capitalize font-DM !text-[1.875em] mb-2 leading-tight font-medium text-white-color sm:!text-[2.515625em] xl:!text-[2.875em]">
                  {item?.heading}
                </h5>
                <div className="max-w-full md:max-w-[74%]  [&amp;>p]:text-[1em]  [&amp;>p>span]:text-dark-pink [&amp;>a]:mt-[1em]  [&amp;>a]:font-semibold hover:[&amp;>a]:text-white-color hover:[&amp;>a]:bg-btn-hover-pink [&amp;>a]:rounded-[0.625em] [&amp;>a]:px-[1.57em] [&amp;>a]:py-[1em] [&amp;>a]:text-sm text-base leading-[1.3em] [&amp;>p]:text-white-color">
                  <p>
                    <PortableText value={item?.description} />
                  </p>
                  <p></p>
                  <Link
                    aria-label="Book Free Consultation"
                    className="text-[1.125em] font-bold leading-[1.25em] text-white bg-pink-700 hover:bg-gray-400 inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center"
                    href={item?.book_free_conclutation?.slug.current}
                  >
                    {item?.book_free_conclutation.label}
                  </Link>
                </div>
              </div>
              <div className="!mx-auto lg:ml-auto  hidden md:flex justify-center md:justify-end pt-12 md:pt-[0] [&amp;>img]:max-w-[90%] [&amp;>img]:ml-auto [&amp;>img]:mr-auto lg:[&amp;>img]:mr-0 [&amp;>img]:h-[335px]">
               
                <img src={urlFor(item?.image).url()} width={300} height={200} alt="image" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Want_hire_devloper_blog;
