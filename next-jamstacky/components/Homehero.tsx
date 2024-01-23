import React from "react";
import Image from "next/image";
import client from "@/client/sanity.client";
import urlFor from "@sanity/image-url";
import Link from "next/link";
import { useClient } from "sanity";

interface IHomehero {
  _id: string;
  title: string;
  hero_image: string;
  hero_title: string;
  hero_description: string;
  title_image: any;
  start_project_button: any;
  jamstack_developer_button: any;
  bottom_description: string;
  section_theme: string;
  asset: string;
  slug: any;
  label: any;
}
const query = `*[_type == "home_hero_section"]{
  _id,
  title,
  "hero_image": hero_image.asset->url,
  hero_title,
  hero_description,
  start_project_button{
    label,
      slug},
  jamstack_developer_button{   
    label,
      slug,
      },
  bottom_description,
  "title_image": title_image.asset->url,
}`;

async function getData() {
  const data = await client.fetch(query);
  return data as IHomehero[];
}

const Homehero = async () => {
  const data = (await getData()) as IHomehero[];
  return (
    <div>
      {data?.map((item) => {
        return (
          <div className="container bg-gradient">
            <div className="flex justify-between items-center pt-[8em] sm:pt-[10em] pb-0 px-10">
              <div className="w-full lg:w-[60%]">
                <div className="relative banner-text-content">
                  <div className="flex xl:items-center  flex-col-reverse xl:flex-row justify-start">
                    <h1 className="inline-block text-[25.2px] esm:text-[28.35px]  md:text-[31.5px] emd:text-[40.25px] lg:text-[46px] font-bold leading-[1.25em] lg:max-w-[32rem] before:absolute relative before:bg-[url(/arrow.svg)] before:content-['']   before:bg-no-repeat before:w-[1.5rem] before:xl:w-[2rem] before:h-[2.5rem] before:xl:h-[2.5rem] before:left-[35.9rem] before:top-[2rem] text-[#110462] mb-[0.5em] font-dmSans">
                      {item?.hero_title}
                    </h1>
                    <div className="max-w-[100px] 2xl:max-w-[unset] mb-4 ml-0 xl:ml-[15px] inline-flex relative lg:mt-[-1.5rem]  before:absolute [&>img]:max-w-[auto] sm:[&>img]:max-w-[8.5em] [&>img]:w-full [&>img]:h-full animation-circle">
                      <Image
                        src={item?.hero_image}
                        height={100}
                        width={100}
                        alt="hero"
                      />
                    </div>
                  </div>
                  <p className="text-sm em:text-base emd:text-xl xl:text-[22px] font-normal leading-[1.5em] text-[#304256] w-full md:w-[80%] emd:w-full">
                    {item?.hero_description}
                  </p>
                  <div className="banner-btn ">
                    <ul className="hover:[&>li>a]:text-[#ffffff] mt-4 flex">
                      <li className="secondary [&>a]:bg-[#222549] hover:[&>a]:bg-black [&>a]:duration-700 [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-[1em] [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] hover:[&>a]:shadow-banner-btn">
                        <Link
                          href={item?.start_project_button.slug.current}
                          className="text-[1.125em] font-bold leading-[1.25em] text-[#ffffff] bg-[#DA3654] hover:bg-dark-blue inline-block cursor-pointer px-[1.3em] py-[0.9em] lg:px-[1.5em] lg:py-[1em] rounded-[3.5em] font-DM  text-center "
                        >
                          {item?.start_project_button.label}
                        </Link>
                      </li>
                      <li className="hover:[&>a]:bg-pink-800 duration-700 ml-0 mt-[0] vsm:ml-4 [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-[1em] em:[&>a]:mt-[0] [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] hover:[&>a]:shadow-banner-btn">
                        <Link
                          href={item?.jamstack_developer_button.slug.current}
                          className="text-[1.125em] font-bold leading-[1.25em] text-[#ffffff] bg-[#DA3654] inline-block cursor-pointer px-[0.8em] em:px-[1em] py-[0.75em] md:py-[0.9em] lg:px-[1.5em] lg:py-[1em] rounded-[3.5em] font-DM"
                        >
                          {item?.jamstack_developer_button.label}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:w-[40%] hidden lg:block">
                <div>
                  <Image
                    src={item?.title_image}
                    height={500}
                    width={500}
                    alt="title"
                  />
                </div>
              </div>
            </div>
            <div className=" max-w-[90%] em:max-w-[80%] lg:max-w-[64%] text-center relative z-0 mt-[3em] em:mt-[3em] mx-auto my-0 pb-[3em] em:pb-[0.5em] vsm:pt-[0]">
              <p className="text-sm em:text-base md:text-lg lg:text-xl !leading-[1.6em] font-normal text-dark-blue">
                {item?.bottom_description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Homehero;
