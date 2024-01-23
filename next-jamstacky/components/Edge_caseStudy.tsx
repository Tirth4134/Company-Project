import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import React from "react";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

interface Iedge {
  _id: string;
  edge_heading: string;
  circle_image: string;
  edge_blog: PortableTextBlock[];
  client_image: string;
  image_name: string;
  case_study_button: string;
  label: any;
  slug: string;
}

async function getData() {
  const query = `*[_type == "edge_caseStudy"]{
    _id,
    edge_heading,
    "circle_image":circle_image.asset->url,
    edge_blog,
    "client_image":client_image.asset->url,
    image_name,
    case_study_button{
      label,
      slug,
    }
  } `;
  const data = client.fetch(query);
  return data as unknown as Iedge[];
}

const Edge_caseStudy = async () => {
  const data = (await getData()) as Iedge[];
  return (
    <>
      <div>
        <div className="container px-10 pt-12">
          {data?.map((item) => {
            return (
              <div className="edge-casestudy-inner" key={item?._id}>
                <div className="section-header">
                  <div className="max-w-[850px] em:ml-0 mr-auto em:text-left md:mb-[50px] ">
                    <p className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-blue">
                      {item?.edge_heading}
                    </p>
                  </div>
                </div>
                <div className="block md:flex items-center pt-[1em] sm:pt-[3.5em] pb-0 px-0">
                  <div
                    className="relative w-[40%] sm:w-[50%] m-auto
              before:content-[''] before:bg-[url(/edge-logo.svg)] before:bg-no-repeat before:w-[3.1em] esm:before:w-[3em] md:before:w-[4rem] before:h-[3rem] md:before:h-[4rem] before:absolute before:right-[38%]  lsm:before:right-[39%] esm:before:right-[41%] em:before:right-[43%] md:before:right-[45%] before:top-[42%]  lsm:before:top-[43%]  esm:before:top-[44%] before:bg-esmedgeSize esm:before:bg-mdedgeSize md:before:bg-edgeSize pl-10
              "
                  >
                    <Image
                      src={item?.circle_image}
                      className="animation-circle"
                      alt="circle"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div
                    className="w-full md:w-[60%] pl-[0] md:pl-[5.3125em] mt-[2em] md:mt-[0em]
                [&>h1]:font-semibold [&>h1]:leading-[1.5em] [&>h1]:w-[70%] [&>h1]:text-[#110462] [&>h1]:mb-[1rem]
                [&>h3]:font-semibold [&>h3]:leading-[1.5em] [&>h3]:text-[#110462] [&>h3]:mb-[0.3em]
                [&>h4]:font-semibold [&>h4]:leading-[30px] sm:[&>h4]:leading-[35px] lg:[&>h4]:leading-[50px] xl:[&>h4]:leading-[60px] [&>h4]:text-dark-blue [&>h4]:mb-[0.3em] [&>h1]:text-[21px] sm:[&>h1]:text-[23px] lg:[&>h1]:text-[34px] xl:[&>h1]:text-[48px]  em:[&>h4]:text-left [&>h4]:font-inter 
                [&>h5]:font-semibold [&>h5]:leading-[1.5em] [&>h5]:text-[#110462] [&>h5]:mb-[0.3em]
                [&>h6]:font-semibold [&>h6]:leading-[1.5em] [&>h6]:text-[#110462] [&>h6]:mb-[0.3em]
                [&>p]:text-[12.75px] md:[&>p]:text-[14.175px] xl:[&>p]:text-[18px] [&>p]:font-inter [&>p]:leading-[22px] xl:[&>p]:leading-[28px]  em:[&>*:nth-child(4)]:text-left
                
              "
                  >
                    <PortableText value={item?.edge_blog} />

                    <div className="mt-[1.75em] pb-[1em] sm:pb-[3em] [&>div]:text-left flex em:justify-start items-center gap-2">
                      <Image
                        src={item?.client_image}
                        alt="client"
                        width={100}
                        height={100}
                        className="[&>img]:max-w-[4em] sm:[&>img]:max-w-[4.8125em]"
                      />
                      <p className="text-[16px] em:text-[18px] xl:text-[22px] leading-normal font-bold text-[#232536] font-DM">
                        {item?.image_name}
                      </p>
                    </div>
                    <div className="hover:[&>a]:text-[#ffffff] [&>a]:px-[20px] sm:[&>a]:px-[28px] [&>a]:py-[10px] sm:[&>a]:py-[12px] hover:[&>a]:bg-[#222549] [&>a]:text-[14px] md:[&>a]:text-[16px] [&>a]:font-medium [&>a]:leading-[20px]">
                      <div className="text-[1.125em] font-bold leading-[1.25em] text-[#ffffff] bg-[#DA3654] hover:bg-blue duration-500 inline-block cursor-pointer px-[0.8em] em:px-[1em] py-[0.75em] md:py-[0.9em] lg:px-[1.5em] lg:py-[1em] rounded-[3.5em] font-DM">
                        <Link href={item?.case_study_button.slug.current}>
                          {item?.case_study_button.label}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Edge_caseStudy;
