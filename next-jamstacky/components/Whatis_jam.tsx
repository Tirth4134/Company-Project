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
          <div className="container px-10 py-16" key={item?._id}>
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
              <div className="mt-8 md:mt-16 grid grid-cols-3 gap-2.5 [&>*:nth-child(1)]:bg-[#00f5c4] [&>*:nth-child(2)]:bg-[#ff871f] [&>*:nth-child(3)]:bg-[#e88da3] [&>*:nth-child(4)]:bg-[#da3654] [&>*:nth-child(4)]:w-[306%] [&>*:nth-child(4)]:justify-center [&>*:nth-child(1)]:rounded-t-2xl [&>*:nth-child(2)]:rounded-t-2xl [&>*:nth-child(3)]:rounded-t-2xl [&>*:nth-child(4)]:rounded-b-2xl [&>*:nth-child(1)]:text-blue [&>*:nth-child(2)]:text-blue [&>*:nth-child(3)]:text-blue  [&>*:nth-child(4)]:text-white [&>*:nth-child(4)]:py-3 [&>*:nth-child(4)]:text-4xl [&>*:nth-child(4)]:font-bold [&>*:nth-child(1)]:text-xl [&>*:nth-child(2)]:text-xl [&>*:nth-child(3)]:text-xl [&>*:nth-child(1)]:px-12 [&>*:nth-child(2)]:px-12 [&>*:nth-child(3)]:px-12 [&>*:nth-child(1)]:pt-4 [&>*:nth-child(2)]:pt-4 [&>*:nth-child(3)]:pt-4 [&>*:nth-child(1)]:h-72 [&>*:nth-child(2)]:h-72 [&>*:nth-child(3)]:h-72">
                {item?.jam_detail?.map((list: any) => {
                  return (
                    <>
                      <ul className="flex" key={list?._id}>
                        <li className="my-2">
                          <h5 className="text-center py-4 capitalize">
                            {list?.jam_title}
                          </h5>
                          <p className="text-center text-[#000000b3] font-medium text-sm font-montserrat">
                            {list?.jam_description}
                          </p>
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
