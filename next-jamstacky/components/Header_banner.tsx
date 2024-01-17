import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Iheader_bann {
  _id: string;
  hire_name: string;
  hire_image: string;
  email: string;
  wha_image: string;
  chat_with_us: string;
  tel_image: string;
  telegram_us: string;
  label: any;
  slug: string;
}

async function getData() {
  const query = `*[_type == 'header_banner']{
        _id,
        hire_name{
           label,
           slug,
        },
        "hire_image":hire_image.asset->url,
        email,
        "wha_image":wha_image.asset->url,
        chat_with_us{
            label,
            url,
        },
        "tel_image":tel_image.asset->url,
        
        telegram_us{
            label,
            url,
        },
    }`;
  const data = await client.fetch(query);
  return data as Iheader_bann[];
}

const Header_banner = async () => {
  const data = (await getData()) as Iheader_bann[];
  // console.log(data); 

  return (
    <div>
      {data.map((item)=> {
        return(

        
    <div key={item?._id} className="flex">
      <div>
        <Link
          href={item?.hire_name?.slug?.current}
          className="flex items-center"
        >
          {item?.hire_name?.label}
          <Image
            src={item?.hire_image}
            alt="hire_image"
            width={35}
            height={35}
          />
        </Link>
      </div>
      <div className="flex  gap-4">
        <a>{item?.email}</a>
        <Link href={item?.chat_with_us?.url} className="flex items-center">
          <Image src={item?.wha_image} alt="whatsapp" width={25} height={25} />
          {item?.chat_with_us.label}
        </Link>

        <Link href={item?.telegram_us?.url} className="flex items-center">
          <Image src={item?.tel_image} alt="telegram" width={25} height={25} />

          {item?.telegram_us.label}
        </Link>
      </div>
    </div>
    )
  })}
    </div>
  );
};

export default Header_banner;
