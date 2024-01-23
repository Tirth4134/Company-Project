import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ITechnology {
  _id: string;
  title: string;
  book_free_consultation_button: string;
  technology_heading: string;
  technology_images: string;
  image_list: any;
  // images:string;
  label: any;
  slug: any;
}

async function gettech() {
  const query = `*[_type == 'home_technology']{
    _id,
  title,
  book_free_consultation_button,
  image_list,

  }`;
  const data = await client.fetch(query);
  return data as ITechnology[];
}

const Hometechnology = async () => {
  const data = (await gettech()) as ITechnology[];

  return (
    <div>
      {data?.map((item) => {
        // item?.book_free_consultation_button?.slug.current);
        return (
          <div className=" bg-gradient  pb-12" key={item?._id}>
            <div>
              <div className=" block sm:flex justify-around gap-20 font-DM  pt-16 items-center pb-12">
                <div
                  key={item?._id}
                  className="font-medium leading-[1em] text-[10px] lg:text-[20px] xl:text-[28px] font-DM text-title-blue-shade"
                >
                  {item?.title}
                </div>
                <div className=" text-[1em] font-bold leading-[1em] text-white-color bg-pink-600 hover:bg-blue duration-700 inline-block cursor-pointer px-[1em] py-30 lg:px-6 lg:py-4 rounded-[3.5em] font-DM text-centerconsultation-btn [&>a]:px-[20px] em:[&>a]:px-[26px] md:[&>a]:px-[34px] [&>a]:py-[14px] em:[&>a]:py-[18px] md:[&>a]:py-[20px] text-center sm:text-right mt-[1.5em] sm:mt-[0] [&>a]:font-bold [&>a]:leading-[20px] [&>a]:text-white-color [&>a]:bg-dark-pink [&>a]:inline-block [&>a]:cursor-pointer [&>a]:rounded-[3.5em] [&>a]:hover:text-white-color hover:[&>a]:bg-dark-blue [&>a]:text-[14.175px] sm:[&>a]:text-[15.75px] xl:[&>a]:text-[18px] ">
                  <Link
                    href={item?.book_free_consultation_button?.slug.current}
                    className="text-[1.125em] font-bold leading-[1.25em] text-white bg-dark-pink hover:bg-dark-blue inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM text-center"
                  >
                    {item?.book_free_consultation_button?.label}
                  </Link>
                </div>
              </div>
              <div className=" ">
                {item?.image_list?.map((list: any) => {
                  return (
                    <>
                      <div
                        key={list?._id}
                        className="m-0  [&>h3]:font-medium [&>h3]:leading-[1em] [&>h3]:text-blue-color  [&>h3]:text-center [&>h4]:font-medium [&>h4]:leading-[1em] [&>h4]:text-blue-color  [&>h4]:text-center [&>h5]:font-medium [&>h5]:leading-[1em] [&>h5]:text-blue-color  [&>h5]:text-center [&>h6]:font-medium [&>h6]:leading-[1em] [&>h6]:text-blue-color  [&>h6]:text-center [&>h6]:text-[12.6px] sm:[&>h6]:text-sm xl:[&>h6]:text-base "
                      >
                        <div className=" text-center text-sm em:text-base md:text-lg mx-auto relative  pb-16 pt-12 text-lightblue">
                          - {list?.technology_heading} -
                        </div>
                        <div className="grid grid-cols-4 items-center m-auto gap-3">
                          {list?.technology_images.map((images: any) => {
                            return (
                              <div
                                key={images?._id}
                                className="items-center m-auto"
                              >
                                <img
                                  src={urlFor(images).url()}
                                  alt="askdosi"
                                  width={200}
                                  height={200}
                                  className="py-4 px-4 flex flex-cols border-dashed border-2 border-pink-500"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hometechnology;
