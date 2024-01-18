 "use client";
import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

interface Iheader {
  _id: string;
  title: string;
  logo: string;
  nav_links: any;
  button: string;
  label: any;
  slug: string;
}

async function getData() {
  const query = `*[_type == 'header']{
    _id,
    logo,
    nav_links,
    button,
}`;
  const data = await client.fetch(query);
  return data as Iheader[];
}

const Header = async () => {
  const [showMen, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMen);
  };
  // console.log(showMen)

  const data = (await getData()) as Iheader[];
  // console.log(data);

  return (
    <div className="bg-gradient">
      {data?.map((list) => {
        // console.log(list)
        return (
          <div
            key={list?._id}
            className="max-w-[90rem] m-auto py-[1.9375rem] flex items-center justify-between relative"
          >
            <div className="flex items-center gap-[0.56rem] justify-center">
              <Link href={"/"}>
                {" "}
                <img
                  src={urlFor(list?.logo).url()}
                  alt=""
                  width={219}
                  height={41}
                />
            <div className="flex items-center gap-[0.56rem]">
            <Link href={"/"}>  
                <img
                src={urlFor(list?.logo).url()}
                alt=""
                width={180}
                height={180}
              />
              </Link>
              {/* <h3 className="text-[2.125rem] font-[500] leading-[2.65625rem] text-center text-blue max-w-[11.0625rem] font-dmSans">{data.logo.logo_text}</h3> */}
            </div>
            <nav className="md:flex items-center hidden">
              {list.nav_links.map((item: any) => {
                return (
                  <li
                    key={item?._id}
                    className="text-[1.125em] font-normal leading-8 list-none flex px-7 capitalize opacity-60 text-blue font-dmSans hover:text-buttoncolor duration-300"
                  >
                    <Link href={item?.slug.current}>{item.label}</Link>
                  </li>
                );
              })}
              <Link
                href={list?.button?.slug.current}
                className="flex items-center justify-center px-[3.21rem] py-[1.25rem] rounded-[3.5rem] bg-blue hover:bg-buttoncolor duration-500 ml-7 text-[1.125rem] text-center font-[700] leading-[1.25rem] text-whitecolor font-dmSans "
              >
                {list?.button?.label}
              </Link>
            </nav>
            <HiOutlineMenu
              className="text-[2.375rem] md:hidden block text-buttoncolor"
              onClick={handleMenu}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Header;


