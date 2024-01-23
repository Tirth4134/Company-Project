import client from "@/client/sanity.client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Icase_home {
  _id: any;
  title: string;
  heading: string;
  defination: string;
  project_image: string;
  start_project: string;
  hire_jamstack_developer: string;
  slug: any;
  label: any;
}

async function getData() {
  const query = `*[_type == "case_studies_and_portfolio"]{
    title,
    heading,
      defination,
      "project_image":project_image.asset->url,
      start_project{
        label,
        slug,
      },
      hire_jamstack_developer{
        label,
        slug,
      }  
  }`;
  const data = await client.fetch(query);
  return data as Icase_home[];
}
const CaseStudies_home_main = async () => {
  const data = (await getData()) as Icase_home[];
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item?._id}
            className="block md:flex items-start justify-between gap-6 bg-gradient px-10"
          >
            <div className="w-full md:w-[70%] max-w-full md:max-w-[60em] relative pt-24 pl-5">
              <h6 className="text-[30px] md:text-[33px] emd:text-[40.25px] xl:text-[46px] leading-[1.25em] mb-8 text-blue font-bold max-w-full md:max-w-[80%] font-DM  esm:text-[28.35px] emd:text-[40.25px]">
                {item?.heading}
              </h6>
              <p className="text-[15.31px] lg:text-[18px] font-normal leading-[1.5rem] text-blue max-w-full md:max-w-[35rem] opacity-70">
                {item?.defination}
              </p>
              <div>
                <ul className="mt-4 flex">
                  <li className="secondary [&>a]:bg-blue hover:[&>a]:bg-black duration-700 hover:[&>a]:text-white [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-4 [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] [&>a]:font-bold  [&>a]:text-white">
                    <Link
                      className="inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-dmSans text-center"
                      href={item?.start_project?.slug.current}
                    >
                      {item?.start_project?.label}
                    </Link>
                  </li>
                  <li className="secondary [&>a]:bg-pink-600 hover:[&>a]:bg-pink-900  [&>a]:text-white [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-4 [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] [&>a]:font-bold ">
                    <Link
                      className="text-[1.125em] font-bold leading-[1.25em] text-white-color bg-pink-700 hover:bg-blue inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-dmSans  text-center"
                      href={item?.hire_jamstack_developer?.slug.current}
                    >
                      {item?.hire_jamstack_developer.label}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-encenter ">
              <Image
                src={item?.project_image}
                width={600}
                height={500}
                alt="developer"
                className="pb-16"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudies_home_main;
