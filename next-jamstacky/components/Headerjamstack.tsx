import client from "@/client/sanity.client";
import Image from "next/image";
import React from "react";
import { PortableTextBlock } from "sanity";

interface IWhat_jam {
  _id: any;
  title: string;
  defination: string;
  jamstack_image: string;
  project_button: string;
  plans_and_pricing_button: string;
}

async function getData() {
  const query = `*[_type == "headerJmastack_home"]{
    title,
      defination,
      "jamstack_image":jamstack_image.asset->url,
      project_button,
      plans_and_pricing_button  
  }`;
  const data = await client.fetch(query);
  return data as IWhat_jam[];
}
const Headerjamstack = async () => {
  const data = (await getData()) as IWhat_jam[];
  //
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item?._id}
            className="block md:flex items-start justify-between gap-6 bg-darkgradient px-10 py-28"
          >
            <div className="w-full md:w-[70%] max-w-full md:max-w-[60em] relative z-0 font-DM">
              <h6 className="text-[30px] md:text-[33px] emd:text-[40.25px] xl:text-[46px] leading-[1.25em] mb-2 text-white-color font-medium max-w-full md:max-w-[70%] font-DM text-white">
                {item?.title}
              </h6>
              <p className="text-[15.31px] lg:text-[18px] font-normal leading-[1.5em] text-white opacity-70 max-w-full md:max-w-[30em]">
                {item?.defination}
              </p>
              <div>
                <ul className="mt-7 flex">
                  <li className="secondary hover:[&amp;>a]:bg-btn-hover-blue hover:[&amp;>a]:text-white-color [&amp;>a]:text-[15.75px] xl:[&amp;>a]:text-[18px] mr-4 [&amp;>a]:px-[25px] [&amp;>a]:py-[12px] lg:[&amp;>a]:px-[30px] sm:[&amp;>a]:py-[16px] lg:[&amp;>a]:py-[20px] [&amp;>a]:font-bold [&amp;>a]:bg-white-color [&amp;>a]:text-dark-blue">
                    <a
                      aria-label="Start Project"
                      className="text-[1.125em] font-bold leading-[1.25em] text-blue bg-white hover:bg-[#21222C] duration-700 hover:text-white inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center"
                      href="/estimate-project/"
                    >
                      {item?.project_button}
                    </a>
                  </li>
                  <li className="secondary [&amp;>a]:bg-dark-blue hover:[&amp;>a]:bg-btn-hover-blue hover:[&amp;>a]:text-white-color [&amp;>a]:text-[15.75px] xl:[&amp;>a]:text-[18px] mr-4 [&amp;>a]:px-[25px] [&amp;>a]:py-[12px] lg:[&amp;>a]:px-[30px] sm:[&amp;>a]:py-[16px] lg:[&amp;>a]:py-[20px] [&amp;>a]:font-bold [&amp;>a]:bg-white-color [&amp;>a]:text-dark-blue">
                    <a
                      aria-label="Plans and Pricing"
                      className="text-[1.125em] font-bold leading-[1.25em] text-white bg-pink-600 hover:bg-pink-900 duration-700 inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center"
                      href="/jamstack/#pricing"
                    >
                      {item?.plans_and_pricing_button}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[70%] em:w-2/4 relative z-0 flex justify-end [&>img]:w-full [&>img]:max-w-[30.125em] [&>img]:object-contain [&>img]:h-full ml-auto md:ml-auto mr-auto md:mr-0 mt-12 em:mt-8 md:mt-[0]  md:w-[42%]  ">
              <Image
                src={item?.jamstack_image}
                width={700}
                height={700}
                alt="developer"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Headerjamstack;
