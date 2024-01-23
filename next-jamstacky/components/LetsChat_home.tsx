import client from "@/client/sanity.client";
import React from "react";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import Link from "next/link";
import { urlFor } from "@/imageBuilder/urlFor";

interface Icontact {
  _id: string;
  title: string;
  description: string;
  email_number: PortableTextBlock[];

  address_time: PortableTextBlock[];
  team_detail: any;
  image: string;
  team_description: PortableTextBlock[];
  contact: any;
  label: string;
  slug: any;
}

async function getData() {
  const query = `*[_type == 'contact_detail']{
      _id,
      title,
      description,
      email_number,
      address_time,
      team_detail,
      


  }`;
  const data = await client.fetch(query);
  return data as Icontact[];
}

const LetsChat_home = async () => {
  const data = (await getData()) as Icontact[];

  return (
    <div>
      {data.map((item: any) => {
        return (
          <div className="px-10 pb-24" key={item?._id}>
            <div className="pt-12 pb-11">
              <h1 className="text-[4.5rem] sm:text-[5.875rem] pt-16 lg:text-[6.5625rem] xl:text-[7.5rem] text-black  font-extrabold tracking-wide leading-tight">
                {item?.title}
              </h1>
              <p className="text-lg opacity-70 font-normal font-montserrat w-1/2">
                {item?.description}
              </p>
            </div>
            <div className="flex justify-between pr-28">
              <div>
                <div className="[&>h5]:text-sm [&>h5]:border-b-[0.0625rem] [&>h5]:border-[#00000033] [&>h5]:inline-block  md:[&>h5]:text-lg xl:[&>h5]:text-xl [&>h5]:font-normal [&>h5]:tracking-wide [&>h5]:text-black [&>h5]:font-montserrat [&>h5]:py-1 hover:[&>h5]:text-lightblue [&>h5]:duration-500 [&>h6]:text-base md:[&>h6]:text-lg xl:[&>h6]:text-xl [&>h6]:font-montserrat [&>h6]:tracking-wide [&>h6]:py-1 [&>h6]:text-black mb-8">
                  <PortableText value={item?.email_number} />
                </div>
                <div className="[&>h5]:font-medium [&>h5]:leading-[1.25rem] [&>h5]:text-[20px] lg:[&>h5]:text-[24px] xl:[&>h5]:text-[28px] [&>h5]:font-dmSans [&>h5]:pb-4 [&>h5]:text-blue [&>p]:text-xs md:[&>p]:text-sm xl:[&>p]:text-base [&>p]:font-normal [&>p]:font-montserrat [&>p]:pb-[0.5rem]  lg:[&>p>a]:text-sm xl:[&>p>a]:text-sm hover:[&>p>a]:text-buttoncolor [&>p>a]:duration-500  [&>p>a]:text-blue [&>p>a]:border-b-2 [&>p>a]:border-b-buttoncolor [&>p>a]:opacity-60 [&>h6]:text-base md:[&>h6]:text-lg xl:[&>h6]:text-xl [&>h6]:font-medium [&>h6]:tracking-wide [&>h6]:mb-4 ">
                  <PortableText value={item?.address_time} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                {item?.team_detail.map((info: any) => {
                  return (
                    <div
                      key={info?._id}
                      className="bg-white mr-5 w-[322px] rounded-3xl shadow-xl relative pt-24 px-8 pb-12 text-center"
                    >
                      <div>
                        <img
                          src={urlFor(info?.image).url()}
                          width={140}
                          height={234}
                          alt="team-image"
                          className="absolute top-[-10rem] right-[6.063rem]"
                        />
                      </div>
                      <div className="[&>h6]:text-blue [&>h6]:text-base md:[&>h6]:text-lg xl:[&>h6]:text-xl [&>h6]:font-medium [&>h6]:font-Mont [&>h6]:mb-2 [&>p]:font-Mont [&>p]:text-xs xl:[&>p]:text-sm">
                        <PortableText value={info?.team_description} />
                      </div>
                      <Link
                        href={info?.contact?.slug.current}
                        className="text-[1.125rem] font-bold leading-[1.25rem] text-white bg-blue hover:bg-pink-500 duration-500 inline-block cursor-pointer px-[2.3rem] py-24 lg:px-6 lg:py-4 rounded-lg font-dmSans text-center mt-8"
                      >
                        {info?.contact?.label}
                      </Link>
                    </div>
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

export default LetsChat_home;
