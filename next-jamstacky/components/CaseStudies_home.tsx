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
            className="block md:flex items-start justify-center gap-6 bg-gradient px-10 pt-16 pb-8"
          >
            <div className="w-full md:w-[70%] max-w-full md:max-w-[60em] relative z-0 font-DM">
              <h6 className="text-[46px] pl-7 pt-4  text-center mb:text-left font-bold text-blue capitalize max-w-[75rem] my-[1rem] font-dmSans">
                {item?.heading}
              </h6>
              <p className="text-[15.31px] lg:text-[18px] pl-7 font-normal leading-[1.5rem] text-blue opacity-60 max-w-full md:max-w-[42rem]">
                {item?.defination}
              </p>
              <div>
                <ul className="mt-4  flex pl-7 pt-8">
                  <li className="secondary [&>a]:bg-dark-blue hover:[&>a]:bg-btn-hover-blue hover:[&>a]:text-white-color [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-4 [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] [&>a]:font-bold [&>a]:bg-white [&>a]:text-blue hover:[&>a]:text-white [&>a]:duration-500">
                    <Link
                      className="text-[1.125em] font-bold leading-[1.25em]  bg-pink-700 hover:bg-blue inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center"
                      href={item?.start_project?.slug.current}
                    >
                      {item?.start_project?.label}
                    </Link>
                  </li>
                  <li className="secondary [&>a]:bg-dark-blue hover:[&>a]:bg-btn-hover-blue hover:[&>a]:text-white-color [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-4 [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] [&>a]:font-bold [&>a]:bg-white-color [&>a]:text-dark-blue">
                    <Link
                      className="text-[1.125em] font-bold leading-[1.25em] text-white bg-pink-700 hover:bg-blue duration-500 inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center"
                      href={item?.hire_jamstack_developer?.slug.current}
                    >
                      {item?.hire_jamstack_developer.label}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" em:w-2/4  relative z-0 flex justify-end [&>img]:w-full [&>img]:max-w-[30.125em] [&>img]:object-contain [&>img]:h-full ml-auto md:ml-auto mr-auto md:mr-0 mt-12 em:mt-8 md:mt-[0] w-[70%] md:w-[42%] ">
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
