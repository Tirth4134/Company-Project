import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import Link from "next/link";
import React from "react";

interface IClient {
  _id: string;
  heading: string;
  studies_list: any;
  image: string;
  year: string;
  title: string;
  description: string;
  button: string;
  label: any;
  slug: any;
  time_image: string;
}

async function getData() {
  const query = `*[_type == 'client_studies']{
      _id,
        heading,
        studies_list,
        time_image,
    }`;
  const data = await client.fetch(query);
  return data as IClient[];
}

const Client_Studies = async () => {
  const data = (await getData()) as IClient[];

  return (
    <div className="px-10 py-10">
      {data.map((item: any) => {
        return (
          <div key={item?._id}>
            <div className="text-blue font-medium font-dmSans text-3xl leading-8 w-[80%]">
              {item?.heading}
            </div>
            <div className="flex pt-16 items-center justify-evenly pb-12">
              {item?.studies_list.map((list: any) => {
                return (
                  <div>
                    <div className="flex justify-center items-center">
                      <img
                        src={urlFor(list?.image).url()}
                        width={400}
                        height={325}
                        alt="project-imagex"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center pt-20">
              <img
                src={urlFor(item?.time_image).url()}
                className="rounded-3xl border border-red-500"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Client_Studies;
