import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Istudies {
  _id: string;
  title: string;
  case_studies_list: any;
  image: string;
  list_detail: PortableTextBlock[];
  button: any;
  label: any;
  slug: any;
}

async function getData() {
  const query = `*[_type == 'our_studies']{
        _id,
        title,
        case_studies_list,
    }`;
  const data = await client.fetch(query);
  return data as Istudies[];
}

const Ourstudies = async () => {
  const data = (await getData()) as Istudies[];
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="px-10  py-10" key={item?._id}>
            <h5 className="font-medium leading-[2.25rem] py-12 text-[20px] lg:text-[24px] xl:text-[28px] font-dmSans text-blue">
              {item?.title}
            </h5>
            <div className="grid grid-cols-2 gap-8">
              {item?.case_studies_list?.map((list: any) => {
                return (
                  <div
                    className="w-full bg-gradient rounded-2xl shadow-xl p-6 text-center"
                    key={list?._id}
                  >
                    <div className="flex items-center justify-center">
                      <img
                        src={urlFor(list?.image).url()}
                        width={400}
                        height={450}
                        alt="image"
                      />
                    </div>
                    <div className="[&>h3]:text-3xl [&>h3]:font-medium [&>h3]:text-blue [&>h3]:py-8 [&>p]:text-sm [&>p]:text-blue [&>p]:opacity-70 [&>p]:pb-7">
                      <p>
                        <PortableText value={list?.list_detail} />
                      </p>
                      <Link
                        href={list?.button?.slug?.current}
                        className="border-pink-600 rounded-2xl border-2 p-2"
                      >
                        {list?.button?.label}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ourstudies;
