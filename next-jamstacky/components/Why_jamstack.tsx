import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import React from "react";

interface Ijamstack {
  _id: string;
  heading: string;
  benifits: any;
  image: string;
  title: string;
  decription: string;
}

async function getData() {
  const query = `*[_type == "why_jamstack"]{
    heading,
    benifits,

}`;
  const data = await client.fetch(query);
  return data as Ijamstack[];
}

const Why_jamstack = async () => {
  const data = (await getData()) as Ijamstack[];

  return (
    <div>
      {" "}
      {data?.map((item: any) => {
        return (
          <>
            {" "}
            <div className="container px-10" key={item?._id}>
              <div className="max-w-[850px] mt-8 ml-5 text-left mb-[30px] md:mb-[50px]">
                <h5 className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-blue">
                  {item?.heading}
                </h5>
              </div>
              <div className="max-w-full mt-[2em] sm:mt-[4em] mb-0 mx-auto grid grid-cols-3">
                {item?.benifits?.map((list: any) => {
                  return (
                    <ul
                      className="flex items-center justify-between lg:justify-center text-center sm:px-8 rounded-[0.625em] [&>*:nth-child(3)]:after:hidden [&>*:nth-child(4)>div]:mt-0 md:pt-8 pb-8 md:pb-12  mx-auto"
                      key={list?._id}
                    >
                      <li className="relative w-full pb-12 sm:px-6">
                        <div className="[&>img]:h-[auto] [&>img]:max-h-[150px] [&>img]:max-w-[150px] [&>img]:w-auto [&>img]:mx-auto">
                          <img
                            src={urlFor(list?.image).url()}
                            width={200}
                            height={200}
                            alt="image"
                          />
                        </div>
                        <div className="mt-4 font-DM">
                          <h6 className="font-bold text-pink-700  mb-2 font-DM text-[18px] em:text-[20px] xl:text-[22px]">
                            {list?.title}
                          </h6>
                          <div className="[&amp;>p]:tracking-[0.07em] [&amp;>p]:text-dark-blue [&amp;>p]:text-sm xl:[&amp;>p]:text-base [&amp;>p]:capitalize font-medium ">
                            <p>{list?.description}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Why_jamstack;
