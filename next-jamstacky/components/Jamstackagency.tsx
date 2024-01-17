import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Iagency {
  _id: string;
  heading: string;
  description: PortableTextBlock[];
  traning_image: string;
  list: any;
  agency_list: any;
  image: string;
  image_name: string;
}

async function getData() {
  const query = `*[_type == "jamstackagency"]{
        _id,
        heading,
        description,
        traning_image,
        list,
    }`;
  const data = await client.fetch(query);
  return data as Iagency[];
}

const Jamstackagency = async () => {
  const data = (await getData()) as Iagency[];
  console.log(data);
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div className="container">
            <div className="block emd:grid grid-cols-[1.5fr_1fr] gap-x-[7em] [&amp;>div>p]:text-[14px] xl:[&amp;>div>p]:text-[15px] [&amp;>div>p]:text-[#646680] [&amp;>div>p]:font-Montserrat [&amp;>div>p]:leading-[180%] [&amp;>div>p]:pb-4 [&amp;>div>p]:font-Inter [&amp;>div>p]:text-center em:[&amp;>div>p]:text-left">
              <div className="[&amp;>div>h5]:max-w-[50.56em] [&amp;>div>h5]:text-dark-blue [&amp;>div>h5]:font-Montserrat [&amp;>div>h5]:font-semibold [&amp;>div>h5]:mb-[0.5em] [&amp;>div>h5]:text-[19px] sm:[&amp;>div>h5]:text-[21px] xl:[&amp;>div>h5]:text-[24px] ">
                <div className="max-w-[850px] mt-[0] ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px]">
                  <div></div>
                  <h5 className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM  text-titlecolor">
                    {item?.heading}
                  </h5>
                </div>
                <PortableText value={item?.description} />

                <div className="mt-4 max-w-full md:max-w-[70%] grid grid-col-2">
                  {item?.list.map((content: any) => {
                    console.log(content?.image_name);

                    return (
                      <div className="flex flex-col">
                        <div className=" justify-center w-28">
                          <div className="w-[5em] h-auto p-[1em] mx-auto text-center bg-white-color rounded-[0.8em] shadow-white-lable">
                            <img src={urlFor(content?.image).url()} />
                          </div>
                          <h6 className="text-[0.875em] text-lightblue font-semibold font-Inter mt-2">
                            {content?.image_name}
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="max-w-[90%] em:max-w-[50%] emd:max-w-full mx-auto pt-20 emd:pt-[0em] flex">
                  <img
                    src={urlFor(item?.traning_image).url()}
                    width={494}
                    height={544}
                    alt="traning"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Jamstackagency;
