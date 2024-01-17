import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PortableTextBlock } from "sanity";

interface IWhyneed {
  _id:string;
  heading:string;
  image:any;
  jamstack_detail:any;
  title:string;
  description:PortableTextBlock[];
}

async function getData() {
  const query = `*[_type == 'why_need_jamstack']{
    _id,
    heading,
    image,
    jamstack_detail,
  }`;
  const data = await client.fetch(query);
  return data as IWhyneed[];
}

const Whydoneed = async () => {
  const data = (await getData()) as IWhyneed[];
  console.log(data);
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div>
            <div>{item?.heading}</div>
            <div>
              {item?.image.map((img: any) => {
                console.log(img);
                return (
                  <div>
                    <img
                      src={urlFor(img).url()}
                      width={150}
                      height={130}
                      alt="jam"
                    />
                  </div>
                );
              })}
            </div>
                     <div>
                      {item?.jamstack_detail.map((list: any)=>{
                          console.log(list); 
                        return(
                          <div>
                            <div className="text-red-500"> {list?.title}</div>
                            <PortableText value={list?.description} />
                          </div>
                        )
                      })}
                     </div>
          </div>
        );
      })}
    </div>
  );
};

export default Whydoneed;
