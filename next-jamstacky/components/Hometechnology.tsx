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
          // console.log(item?.book_free_consultation_button?.slug.current);
        return (
          <div className=" bg-slate-200 ">
            <div>
              <div className=" block sm:flex justify-between font-DM ">
                <div
                  key={item?._id}
                  className="font-medium leading-[1em] text-[10px] lg:text-[20px] xl:text-[28px] font-DM text-title-blue-shade">
                  {item?.title}
                </div>
                <div className=" text-[1em] font-bold leading-[1em] text-white-color bg-pink-600 hover:bg-pink-500 inline-block cursor-pointer px-[1em] py-30 lg:px-6 lg:py-4 rounded-[3.5em] font-DM text-centerconsultation-btn [&amp;>a]:px-[20px] em:[&amp;>a]:px-[26px] md:[&amp;>a]:px-[34px] [&amp;>a]:py-[14px] em:[&amp;>a]:py-[18px] md:[&amp;>a]:py-[20px] text-center sm:text-right mt-[1.5em] sm:mt-[0] [&amp;>a]:font-bold [&amp;>a]:leading-[20px] [&amp;>a]:text-white-color [&amp;>a]:bg-dark-pink [&amp;>a]:inline-block [&amp;>a]:cursor-pointer [&amp;>a]:rounded-[3.5em] [&amp;>a]:hover:text-white-color hover:[&amp;>a]:bg-dark-blue [&amp;>a]:text-[14.175px] sm:[&amp;>a]:text-[15.75px] xl:[&amp;>a]:text-[18px] ">
                  <Link
                    href={item?.book_free_consultation_button?.slug.current}
                    className="text-[1.125em] font-bold leading-[1.25em] text-white bg-dark-pink hover:bg-dark-blue inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM text-center">
                    {item?.book_free_consultation_button?.label}
                  </Link>
                </div>
              </div>
              <div className="  ">
                {item?.image_list?.map((list: any) => {
                  console.log(list, "images are come");
                  return (
                    <>
                      <div key={list?._id} className="m-0  [&>h3]:font-medium [&>h3]:leading-[1em] [&>h3]:text-blue-color  [&>h3]:text-center [&>h4]:font-medium [&>h4]:leading-[1em] [&>h4]:text-blue-color  [&>h4]:text-center [&>h5]:font-medium [&>h5]:leading-[1em] [&>h5]:text-blue-color  [&>h5]:text-center [&>h6]:font-medium [&>h6]:leading-[1em] [&>h6]:text-blue-color  [&>h6]:text-center [&>h6]:text-[12.6px] sm:[&>h6]:text-sm xl:[&>h6]:text-base ">
                        <div className=" text-center text-sm em:text-base md:text-lg mx-auto relative before:content before:absolute before:left-[-2em] before:top-[0.6em] before:w-0 sm:before:w-4 md:before:w-6 before:h-[2px] before:bg-light-blue before:rounded-xl after:content after:absolute after:right-[-2em] after:top-[0.6em] after:w-0 sm:after:w-4 md:after:w-6 after:h-[2px] after:bg-light-blue after:rounded-xl">
                          {list?.technology_heading}
                        </div>
                        <div>
                         

                       <div className="grid grid-cols-4 items-center justify-center">
                       {list?.technology_images.map((images: any) => {
                          // console.log(images);
                          return (
                           
                              <div className=" " key={images?._id}>
                                <img
                                  src={urlFor(images).url()}
                                  alt="askdosi"
                                  width={200}
                                  height={200}
                                  className=" flex flex-cols "
                                />
                              </div>
                           
                          );
                        })}
                       </div>
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
