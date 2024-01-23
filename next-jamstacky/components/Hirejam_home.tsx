import client from "@/client/sanity.client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

interface IHire_jam {
  _id: any;
  title: string;
  defination: string;
  hireremote_image: string;
  call_button: string;
  plans_and_pricing_button: string;
  slug: any;
  label: any;
}

async function getData() {
  const query = `*[_type == "hire_banner"]{
    title,
      defination,
      "hireremote_image":hireremote_image.asset->url,
      call_button{
        label,
        slug
      },
      plans_and_pricing_button{
        label,
        slug
      }  
  }`;
  const data = await client.fetch(query);
  return data as IHire_jam[];
}
const Hirejam_home = async () => {
  const data = (await getData()) as IHire_jam[];

  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item?._id}
            className="block md:flex items-start px-10 justify-between gap-6 bg-gradient pt-28 pb-10"
          >
            <div className="w-full md:w-[70%] max-w-full md:max-w-[60em] relative z-0 font-DM">
              <h6 className="text-[30px] md:text-[33px] emd:text-[40.25px] xl:text-[46px] mb-2 text-blue font-bold max-w-full md:max-w-[80%] font-dmSans esm:text-[28.35px] leading-[3.5rem] emd:text-[40.25px]">
                {item?.title}
              </h6>
              <p className="text-[15.31px] lg:text-[18px] pt-6 font-normal leading-[1.5rem]  text-blue max-w-full md:max-w-[35rem] opacity-70">
                {item?.defination}
              </p>
              <div>
                <ul className="mt-6 flex">
                  <li className="secondary [&>a]:bg-blue hover:[&>a]:bg-black duration-700 [&>a]:text-white [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-4 [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] [&>a]:font-bold [&>a]:bg-white-color [&>a]:text-dark-blue">
                    <Link
                      className=" inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-dmSans text-center"
                      href={item?.call_button?.slug.current}
                    >
                      {item?.call_button?.label}
                    </Link>
                  </li>
                  <li className="secondary [&>a]:bg-buttoncolor hover:[&>a]:bg-pink-900 [&>a]:text-white [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-4 [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] [&>a]:font-bold [&>a]:bg-white-color [&>a]:text-dark-blue">
                    <Link
                      className=" inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-dmSans  text-center"
                      href={item?.plans_and_pricing_button?.slug.current}
                    >
                      {item?.plans_and_pricing_button.label}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[70%] em:w-2/4 md:w-2/5 relative z-0 flex justify-end [&>img]:w-full [&>img]:max-w-[30.125em] [&>img]:object-contain [&>img]:h-full ml-auto md:ml-auto mr-auto md:mr-0 mt-12 em:mt-8 md:mt-[0]">
              <Image
                src={item?.hireremote_image}
                width={600}
                height={500}
                alt="developer"
                className="mr-24"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hirejam_home;
