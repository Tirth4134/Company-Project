import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import React from "react";

interface IhowIt {
  _id: string;
  heading: string;
  title: string;
  images: any;
  alt: string;
  text: string;
  conversion_title: string;
  description: string;
  conv_image: string;
}

async function getList() {
  const query = `*[_type == "howDoesItWork"]{
        _id,
        heading,
        title,
        images,
        conversion_title,
        description,
          conv_image
        
    }`;
  const data = await client.fetch(query);
  return data as IhowIt[];
}

const HowodoesItWork = async () => {
  const data = (await getList()) as IhowIt[];

  return (
    <div className="flex flex-col items-center justify-center px-10 mt-8 mb-12">
      {data.map((item) => {
        return (
          <>
            <div key={item._id} className="bg-[#f4fbff]">
              <h2 className="text-[1.3rem] mb:text-left text-center mb:text-lefet mb:text-[2.15rem] font-[500] text-blue capitalize max-w-[75rem] my-[1rem] font-dmSans">
                {item?.title}
              </h2>
              <ul className="flex items-center justify-evenly gap-10 pt-8">
                {item?.images?.map((image: any) => {
                  return (
                    <div key={image._key}>
                      <img
                        src={urlFor(image?.asset._ref).url()}
                        width={200}
                        height={100}
                        alt={image.alt}
                        className=""
                      />
                      <h3 className="text-pink-600 font-dmSans font-semibold">
                        {image?.text}
                      </h3>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-evenly pt-40 ">
              <div className="w-[60%]">
                <h1 className="capitalize font-dmSans !text-[1.875rem] mb-2 text-blue md:text-[2.1875em] xl:!text-[2.125em]">
                  {item?.conversion_title}
                </h1>
                <div className=" text-base leading-6 text-black">
                  <p>{item?.description}</p>
                </div>
              </div>
              <div>
                <img
                  src={urlFor(item?.conv_image).url()}
                  width={364}
                  height={335}
                  alt="conversation"
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default HowodoesItWork;
