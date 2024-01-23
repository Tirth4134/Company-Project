import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Iheader_bann {
  _id: any;
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
  //

  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item?._id}
            className="flex justify-between m-auto items-center mx-10"
          >
            <div>
              <Link
                href={item?.hire_name?.slug?.current}
                className="flex items-center justify-center"
              >
                {item?.hire_name?.label}
                <Image
                  src={item?.hire_image}
                  alt="hire_image"
                  width={35}
                  height={35}
                  className="text-buttoncolor"
                />
              </Link>
            </div>
            <div className="flex gap-4">
              <a>{item?.email} |</a>
              <Link
                href={item?.chat_with_us?.url}
                className="flex gap-2 items-center"
              >
                <Image
                  src={item?.wha_image}
                  alt="whatsapp"
                  width={17}
                  height={17}
                />
                {item?.chat_with_us.label}
              </Link>{" "}
              |
              <Link
                href={item?.telegram_us?.url}
                className="flex gap-2 items-center"
              >
                <Image
                  src={item?.tel_image}
                  alt="telegram"
                  width={17}
                  height={17}
                />

                {item?.telegram_us.label}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header_banner;
