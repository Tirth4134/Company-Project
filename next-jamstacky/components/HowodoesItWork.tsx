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
  console.log(data);

  return (
    <div className='flex flex-col items-center justify-center '>
      {data.map((item) => {
        console.log(item?.conversion_title);

        return (
          <div key={item._id} >
            <h2 className="text-[1.3rem] mb:text-left text-center mb:text-lefet mb:text-[2.15rem] font-[500] text-blue capitalize max-w-[75rem] my-[1rem] font-dmSans">
              {item?.title}
            </h2>
            <ul className="flex items-center justify-center">
              {item?.images?.map((image: any) => {
                return (
                  <div key={image._key}>
                    <img
                      src={urlFor(image?.asset._ref).url()}
                      width={200}
                      height={100}
                      alt={image.alt}
                      className=" justify-between  gap-10 "
                    />
                    <h3>{image?.text}</h3>
                  </div>
                );
              })}
            </ul>
            <div className="flex ">
              <div>
                <h1 className="capitalize font-DM !text-[1.875em] mb-2 leading-tight font-medium leading-[1.25em] font-medium text-title-blue-shade text-[1.625em] md:text-[2.1875em] xl:!text-[2.125em]">
                  {item?.conversion_title}
                </h1>
                <div className="max-w-full md:max-w-[74%]  [&amp;>p]:text-[1em]  [&amp;>p>span]:text-dark-pink [&amp;>a]:mt-[1em]  [&amp;>a]:font-semibold hover:[&amp;>a]:text-white-color hover:[&amp;>a]:bg-btn-hover-pink [&amp;>a]:rounded-[0.625em] [&amp;>a]:px-[1.57em] [&amp;>a]:py-[1em] [&amp;>a]:text-sm [&amp;>p]:text-black-color [&amp;>p]:text-base sm:[&amp;>p]:text-lg !max-w-full [&amp;>p]:leading-[1.8em] ">
                <p>{item?.description}</p>
                </div>
              </div>
              <div>
                <img
                  src={urlFor(item?.conv_image).url()}
                  width={200}
                  height={200}
                  alt="conversation"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HowodoesItWork;
