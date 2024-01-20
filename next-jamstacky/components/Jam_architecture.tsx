import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Iarchi {
  _id: string;
  title: string;
  image: string;
  description: PortableTextBlock[];
  reviews_online: any;
  heading: string;
  heading_detail: PortableTextBlock[];
  review_image: string;
  button: any;
  slug: any;
  label: string;
  star_image: string;
}

async function getData() {
  const query = `*[_type == "jamstack_architecture"]{
    title,
    "image":image.asset->url,
    description,
    reviews_online,
}`;
  const data = await client.fetch(query);
  return data as Iarchi[];
}

const Jam_architecture = async () => {
  const data = (await getData()) as Iarchi[];

  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <div key={item?._id}>
              <div className="container px-10">
                <div className="max-w-[850px] ml-5 mt-3 text-left mb-[30px] md:mb-[50px]">
                  <h5 className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-blue">
                    {item?.title}
                  </h5>
                </div>
                <div className="mt-12 [&>img]:max-h-[24em] [&>img]:block [&>img]:m-auto [&>img]:my-8 ">
                  <Image
                    src={item?.image}
                    width={1701}
                    height={477}
                    alt="architecture"
                  />
                </div>
                <div className="max-w-[84rem] xl:max-w-[77rem] text-left w-full pl-11 my-6 font-DM [&>ul>li]:list-disc [&>ul>li]:text-[#222549] [&>ul>li]:py-5">
                  <PortableText value={item?.description} />
                </div>
              </div>
              <div>
                <div className="container px-12">
                  <div className="p-6 md:p-8 block md:flex justify-between items-center bg-darkgradient">
                    <div className="w-full md:w-[50%] emd:w-[65%] [&>p]:text-[#fff] m-auto [&>p]:text-[12.6px] em:[&>p]:text-[14.175px] emd:[&>p]:text-[15.75px] xl:[&>p]:text-[18px] [&>p]:font-Inter [&>p]:tracking-[0.05em] [&>p]:leading-[25px] em:[&>p]:leading-[30px] [&>p]:pb-8 [&>a]:py-[1em] [&>a]:px-[2.5em] [&>a]:text-[12.6px] em:[&>a]:text-[14.175px] emd:[&>a]:text-[15.75px] xl:[&>a]:text-[18px] hover:[&>a]:bg-btn-hover-pink hover:[&>a]:text-white-color [&>a]:font-bold">
                      <div className="mb-[0.7em] [&>h4]:font-DM [&>h4]:text-[21px] em:[&>h4]:text-[26.25px] xl:[&>h4]:text-[30px] [&>h4]:text-white-color [&>h4]:font-bold inline-flex flex-wrap items-baseline [&>img]:max-w-[6em] [&>img]:mt-[0.6em] sm:[&>img]:mt-[0.75em] [&>img]:mx-[0.5em] [&>p]:text-[15.75px] xl:[&>p]:text-[18px] hover:[&>a]:shadow-review-btn">
                        <h4 className="text-white">“We constantly receive 5</h4>
                        <img
                          src={urlFor(item?.reviews_online?.star_image).url()}
                          alt="star"
                          height={75}
                          width={371}
                        />
                        <h4 className="text-white">reviews online“</h4>
                      </div>
                      <PortableText
                        value={item?.reviews_online?.heading_detail}
                      />
                      <div>
                        <Link
                          aria-label="Book free consultation"
                          className="text-[1.125em] font-bold leading-[1.25em] text-white bg-pink-600 hover:bg-pink-900 inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-dmSans  text-center"
                          href={item?.reviews_online?.button?.slug.current}
                        >
                          {item?.reviews_online?.button?.label}
                        </Link>
                      </div>
                    </div>
                    <div className="w-full md:w-[50%] emd:w-[30%] text-center md:text-left mt-12 md:mt-[0] [&amp;>img]:max-w-[23.125em] [&amp;>img]:max-h-[17.875em] [&amp;>img]:ml-auto [&amp;>img]:mr-auto md:[&amp;>img]:mr-0">
                      <img
                        src={urlFor(item?.reviews_online?.review_image).url()}
                        width={554}
                        height={405}
                        alt="reviewImage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Jam_architecture;
