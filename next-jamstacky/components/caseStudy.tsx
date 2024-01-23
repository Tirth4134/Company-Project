import client from "@/client/sanity.client";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

interface ICaseStudy {
  _id: string;
  heading: string;
  core_web_title: string;
  volz_blog_title: PortableTextBlock[];

  image: string;
  profile_image: {
    alt: string;
    image: string;
  };
  graph_image: string;
  alt: string;
}
async function getData() {
  const query = `*[_type == 'case_study']{
    _id,
    heading,
    core_web_title,
    volz_blog_title,
    
    "profile_image":profile_image.asset->url,
    "graph_image":graph_image.asset->url,
  }`;
  const data = await client.fetch(query);
  return data as ICaseStudy[];
}

const CaseStudy = async () => {
  const data = (await getData()) as ICaseStudy[];
  //
  return (
    <div>
      <div className="container px-10 py-20">
        {data?.map((item) => {
          return (
            <div key={item?._id}>
              <div className="max-w-[850px] mt-[3rem]  em:ml-0 em:text-left mb-[30px] md:mb-[50px] ">
                <p className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-[#110462]">
                  {item?.heading}
                </p>
              </div>

              <div className="block md:flex  p-0 font-DM">
                <div className="w-full md:w-[40%] max-w-full md:max-w-[35em] xl:max-w-[30em]">
                  <div>
                    <Image
                      src={item?.profile_image}
                      height={350}
                      width={350}
                      alt="image"
                    />
                  </div>

                  <div className="mt-[1.5em] mb-0 mx-0">
                    <h1 className="text-[17px] sm:text-[19px] xl:text-2xl font-normal leading-[1.5em] text-[#222549] font-dmSans">
                      {item?.core_web_title}
                    </h1>
                    <div>
                      <ul className="block mt-[1.5em]">
                        <Image
                          src={item?.graph_image}
                          height={450}
                          width={550}
                          alt="image"
                          // priority
                        />
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full md:w-[60%] pl-[0] md:pl-[5.3125em] [&>h1]:text-2xl [&>h1]:text-[#110462] [&>h1]:font-normal [&>h1]:leading-6 [&>h1]:mb-4 mt-[3em] sm:mt-[5em] md:mt-[3em] 
                [&>p]:text-[16px]  sm:[&>p]:text-[20px] lg:[&>p]:text-[24px] xl:[&>p]:text-[24px]  [&>p]:font-normal [&>p]:leading-[24px] em:[&>p]:leading-[28px] sm:[&>p]:leading-[35px] lg:[&>p]:leading-[40px]  [&>p]:text-[#222549]  [&>p]:mb-[0.5em] [&>p]:pt-4
              "
                >
                  <PortableText value={item?.volz_blog_title} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudy;
