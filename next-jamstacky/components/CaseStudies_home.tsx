import client from "@/client/sanity.client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

interface IHire_jam {
  _id: string;
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
  const query = `*[_type == "CaseStudies_banner"]{
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
  return data as IHire_jam[];
}
const CaseStudies_home = async () => {
  const data = (await getData()) as IHire_jam[];
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item?._id}
            className="block md:flex items-start justify-between gap-6 bg-slate-400"
          >
            <div className="w-full md:w-[70%] max-w-full md:max-w-[60em] relative z-0 font-DM">
              <h6 className="text-[1.5rem] mb:text-left text-center mb:text-lefet mb:text-[2.15rem] font-[500] text-blue capitalize max-w-[75rem] my-[1rem] font-dmSans">
                {item?.heading}
              </h6>
              <p className="text-[15.31px] lg:text-[18px] font-normal leading-[1.5em] text-white-color opacity-70 max-w-full md:max-w-[30em]">
                {item?.defination}
              </p>
              <div>
                <ul className="mt-4 block flex">
                  <li className="secondary [&amp;>a]:bg-dark-blue hover:[&amp;>a]:bg-btn-hover-blue hover:[&amp;>a]:text-white-color [&amp;>a]:text-[15.75px] xl:[&amp;>a]:text-[18px] mr-4 [&amp;>a]:px-[25px] [&amp;>a]:py-[12px] lg:[&amp;>a]:px-[30px] sm:[&amp;>a]:py-[16px] lg:[&amp;>a]:py-[20px] [&amp;>a]:font-bold [&amp;>a]:bg-white-color [&amp;>a]:text-dark-blue">
                    <Link
                      className="text-[1.125em] font-bold leading-[1.25em] text-white-color bg-pink-700 hover:bg-blue inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center"
                      href={item?.start_project?.slug.current}
                    >
                      {item?.start_project?.label}
                    </Link>
                  </li>
                  <li className="secondary [&amp;>a]:bg-dark-blue hover:[&amp;>a]:bg-btn-hover-blue hover:[&amp;>a]:text-white-color [&amp;>a]:text-[15.75px] xl:[&amp;>a]:text-[18px] mr-4 [&amp;>a]:px-[25px] [&amp;>a]:py-[12px] lg:[&amp;>a]:px-[30px] sm:[&amp;>a]:py-[16px] lg:[&amp;>a]:py-[20px] [&amp;>a]:font-bold [&amp;>a]:bg-white-color [&amp;>a]:text-dark-blue">
                    <Link
                      className="text-[1.125em] font-bold leading-[1.25em] text-white-color bg-pink-700 hover:bg-blue inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center"
                      href={item?.hire_jamstack_developer?.slug.current}
                    >
                      {item?.hire_jamstack_developer.label}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[70%] em:w-2/4 md:w-2/5 relative z-0 flex justify-end [&amp;>img]:w-full [&amp;>img]:max-w-[30.125em] [&amp;>img]:object-contain [&amp;>img]:h-full ml-auto md:ml-auto mr-auto md:mr-0 mt-12 em:mt-8 md:mt-[0] w-[70%] md:w-[42%] flex justify-end z-0 ">
              <Image
                src={item?.project_image}
                width={600}
                height={500}
                alt="developer"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudies_home;
