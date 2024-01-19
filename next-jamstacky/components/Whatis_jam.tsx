import client from "@/client/sanity.client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Ijam {
  _id: "string";
  title: "string";
  description: PortableTextBlock[];
  defination: "string";
  path_image: "string";
  jam_detail: any;
}

async function getData() {
  const query = `*[_type == "what_is_jamstack"]{
    _id,
    jam_detail,
      title,
      defination,
      description,
      "path_image":path_image.asset->url,
 }`;
  const data = await client.fetch(query);
  return data as Ijam[];
}

const Whatis_jam = async () => {
  const data = (await getData()) as Ijam[];
  return (
    <div>
      {data?.map((item) => {
        return (
          <div className="container px-10 py-16">
            <div className="[&>h2]:font-medium [&>h2]:leading-[1.5em] [&>h2]:text-dark-blue [&>h2]:text-[28px] sm:[&amp;>h2]:text-[42px] emd:[&>h2]:text-[52px] xl:[&>h2]:text-[60px] [&>h2]:mb-[0.25em] [&>h2]:font-DM [&>h3]:font-medium [&>h3]:leading-[1.5em] [&>h3]:text-dark-blue [&>h3]:text-[3.75em] [&>h3]:mb-[0.25em] [&>h4]:font-medium [&>h4]:leading-[1.5em] [&>h4]:text-dark-blue [&>h4]:text-[3.75em] [&>h4]:mb-[0.25em] [&>h5]:font-medium [&>h5]:leading-[1.5em] [&>h5]:text-dark-blue [&>h5]:text-[3.75em] [&>h5]:mb-[0.25em] [&>h6]:font-medium [&>h6]:leading-[1.5em] [&>h6]:text-dark-blue [&>h6]:text-[3.75em] [&>h6]:mb-[0.25em]  [&>h2>strong>:nth-child(3)]:text-[#95f9ed] [&>h2>strong>span]:uppercase [&>img]:my-12 [&>img]:max-w-full md:[&>img]:max-w-[80%] [&>img]:mx-auto">
              <h2 className="text-3xl ">{item?.title}</h2>
              <div className="[&>p]:text-sm sm:[&>p]:text-base xl:[&>p]:text-lg [&>p]:font-normal [&>p]:leading-[1.75em] [&>p]:tracking-wide [&>p]:mb-[1.5em] [&>p]:p-0 [&>h2>strong>:nth-child(1)]:text-Cerise-red [&>p]:text-[#222549] [&>p]:font-Inter [&>p]:opacity-70">
                <PortableText value={item?.description} />
              </div>
              <p></p>
              <Image
                src={item?.path_image}
                alt="path_image"
                width={1366}
                height={274}
              />
              <p className="text-[#222549] text-lg text-center">
                {item?.defination}
              </p>
              <div>{item?.jam_detail?.jam_title}</div>
              <div className="mt-8 md:mt-16">
                {item?.jam_detail?.map((list: any) => {
                  //   console.log(list?.jam_title)
                  return (
                    <>
                      <ul className="mx-auto flex">
                        <li className=" bg-[#FF871F] w-[30%] border-red-600 border-2 my-2">
                          <h5>{list?.jam_title}</h5>
                          <p>{list?.jam_description}</p>
                          <p></p>
                        </li>
                      </ul>
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

export default Whatis_jam;
