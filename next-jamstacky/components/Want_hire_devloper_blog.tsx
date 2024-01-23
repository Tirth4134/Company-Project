import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Iwant_hire {
  _id: any;
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
    <div className="">
      {data.map((item: any) => {
        return (
          <div key={item?._id}>
            <div className=" text-white max-w-[1220px] mx-auto py-[2em] md:py-[2.6875em] px-[2em] md:px-[3.5em] rounded-[0.625em] block md:flex justify-between align-center  em:text-left items-center secondary bg-darkgradient">
              <div className="[&>div>h5]:text-white [&>div>h5]:text-center em:[&>div>h5]:text-left [&>h5]:text-[19px] sm:[&:h5]:text-[21px] xl:[&>h5]:text-[24px]  [&>p]:font-DM  [&>p]:text-white-color [&>p]:text-sm xl:[&>p]:text-base [&>p]:text-center em:[&>p]:text-left [&>a]:rounded-[3em] [&>a]:text-sm xl:[&>a]:text-base [&>a]:font-semibold hover:[&>a]:bg-white-color hover:[&>a]:text-dark-blue [&>a]:shadow-hire-btn [&>a]:py-4 esm:[&>a]:py-[1.125em] [&>a]:px-4 lsm:[&>a]:px-[1.8em] esm:[&>a]:px-10 w-full md:w-3/4 xl:pr-10 ">
                <h5 className="capitalize font-dmSans !text-[1.875em] mb-2 leading-tight font-medium text-white-color sm:!text-[2.515625em] xl:!text-[2.875em]">
                  {item?.heading}
                </h5>
                <div className="max-w-full md:max-w-[74%]  [&>p]:text-[1em]  [&>p>span]:text-dark-pink [&>a]:mt-[1em]  [&>a]:font-semibold hover:[&>a]:text-white-color hover:[&>a]:bg-btn-hover-pink [&>a]:rounded-[0.625em] [&>a]:px-[1.57em] [&>a]:py-[1em] [&>a]:text-sm text-base leading-[1.3em] [&>p]:text-white-color">
                  <p>
                    <PortableText value={item?.description} />
                  </p>
                  <p></p>
                  <Link
                    aria-label="Book Free Consultation"
                    className="text-[1.125em] font-bold leading-[1.25em] text-white bg-pink-600 hover:bg-pink-900 duration-700 inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center"
                    href={item?.book_free_conclutation?.slug.current}
                  >
                    {item?.book_free_conclutation.label}
                  </Link>
                </div>
              </div>
              <div className="!mx-auto lg:ml-auto  hidden md:flex justify-center md:justify-end pt-12 md:pt-[0] [&>img]:max-w-[90%] [&>img]:ml-auto [&>img]:mr-auto lg:[&>img]:mr-0 [&>img]:h-[335px]">
                <img
                  src={urlFor(item?.image).url()}
                  width={300}
                  height={200}
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

export default Want_hire_devloper_blog;
