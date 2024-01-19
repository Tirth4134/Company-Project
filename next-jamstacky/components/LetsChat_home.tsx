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
  console.log(data);
  return (
    <div>
      {data.map((item: any) => {
        console.log(item);
        return (
          <div>
            <div>
              <h1 className="text-3xl font-bold">{item?.title}</h1>
              <p className="text-sm">{item?.description}</p>
            </div>
            <div>
                <PortableText value={item?.email_number} />
            </div>
            <div>
              <PortableText value={item?.address_time} />
            </div>
            <div className="flex">
                  {item?.team_detail.map((info:any)=>{
                      console.log(info?.contact?.slug.current);
                     return(
                              <div key={info?._id} >
                                <div >
                                  <img  src={urlFor(info?.image).url()}  width={100} height={150} alt="team-image" />
                                </div>
                                  <div>
                                      <PortableText value={info?.team_description} />
                                  </div>
                                  <Link href={info?.contact?.slug.current} >
                                        {info?.contact?.label}
                                  </Link>
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

export default LetsChat_home;
