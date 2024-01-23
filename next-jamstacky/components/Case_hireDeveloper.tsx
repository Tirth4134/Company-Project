import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

interface IDeveloper {
  _id: string;
  heading: string;
  description: PortableTextBlock[];
  button: string;
  image: string;
  label: any;
  slug: any;
}

async function getData() {
  const query = `*[_type == 'Case_hire_developer']{
    _id,
    heading,
    description,
    button,
    image,
  }`;
  const data = await client.fetch(query);
  return data as IDeveloper[];
}

const Case_hireDeveloper = async () => {
  const data = (await getData()) as IDeveloper[];
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div className="px-10 py-20 flex justify-center" key={item?._id}>
            <div className="w-2/3">
              <h5 className="capitalize font-dmSans mb-2 leading-tight font-medium text-blue text-[1.625rem] md:text-[2.1875em] xl:!text-[2.125rem]">
                {item?.heading}
              </h5>
              <div className="[&>p]:text-blue [&>p]:opacity-70 [&>p]:py-3 mb-6">
                <PortableText value={item?.description} />
              </div>
              <Link
                href={item?.button?.slug?.current}
                className="bg-pink-600 hover:bg-pink-700 duration-900 rounded-xl p-4 mt-4 text-white font-semibold tracking-widest font-dmSans"
              >
                {item?.button?.label}
              </Link>
            </div>
            <div>
              <img
                src={urlFor(item?.image).url()}
                width={300}
                height={200}
                alt="image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Case_hireDeveloper;
