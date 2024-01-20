import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
// import Link from "next/link";
import Link from "next/link";
import { PortableTextBlock } from "sanity";

interface Ifooter {
  _id: string;
  footer_text: any;
  footer_image: string;
  footer_button: string;
  emailus_link: string;
  footer_banner: any;
  footerBanner_logo: any;
  foot_links: any;
  emailUs: PortableTextBlock[];
  label: any;
  slug: any;
}

async function getData() {
  const query = `*[_type == "footer"]{
    _id,
    footer_text,
    "footer_image":footer_image.asset->url,
    footer_button{
      label,
      slug
    },
    emailus_link,
    foot_links,
    emailUs,
    "footerBanner_logo":footerBanner_logo.asset->url,
  }
`;
  const data = await client.fetch(query);
  return data as Ifooter[];
}

const Footer = async () => {
  const data = (await getData()) as Ifooter[];
  // 

  return (
    <div id="introcall-section">
      {data?.map((item) => {
        // item?.footer_button);

        return (
          <div key={item?._id} className="bg-whitecolor shadow-footerShadow">
            {/* top section */}
            <div className="max-w-[90rem] m-auto py-[1rem] mb:py-[2.63rem] px-[1rem] gap-[1rem]  md:flex-row flex items-center justify-center md:justify-evenly">
              <div className="[&>h5]:text-[1.5rem] [&>h5]:font-semibold [&>h5]:text-titlecolor [&>h5]:mb:text-left [&>h5]:max-w-[32.8rem] [&>h5]:font-dmSans [&>p]:text-[1rem] [&>p]:font-[400] [&>p]:text-footertextcolor [&>p]:max-w-[49.8rem] [&>p]:my-[0.9rem] [&>p]:text-center [&>p]:mb:text-left [&>p]:font-dmSans  [&>p]:leading-[1.5rem] ">
                <PortableText value={item?.footer_text} />
              </div>
              <div className="[&>p]:text-[1rem] [&>p]:my-[1.25rem]  [&>p]:text-center [&>p]:mb:text-left [&>p]:font-[400] [&>p]:text-footertextcolor  [&>p]:font-dmSans [&>p>a]:text-lightblue [&>p>a]:font-[400] [&>p>a]:underline">
                <img
                  src={urlFor(item?.footer_image).url()}
                  alt=""
                  height={180}
                  width={180}
                  className="ml-16"
                />
                <div className="text-[1rem] my-4 mb:text-[1.125rem] font-[700] shadow-buttonshdow text-whitecolor font-dmSans leading-[1.25rem] py-[1rem] mb:py-[1.25rem] px-[1rem] mb:px-[1.62rem] bg-blue rounded-[3.5rem] hover:bg-buttoncolor duration-500">
                  <Link href={item?.footer_button?.slug.current}>
                    ⚡️ {item?.footer_button?.label}
                  </Link>
                </div>
                <div className="text-center">
                  or email us at{" "}
                  <button className="text-buttoncolor underline">
                    {item?.emailus_link}
                  </button>
                </div>
              </div>
            </div>

            {/* bottom section */}
            <div className=" bg-blue py-[1rem]  ">
              <div className="max-w-[90rem] m-auto flex items-center  flex-col md:flex-row justify-center  gap-[22rem] md:justify-center px-[1rem]">
                <div className="flex mb:flex-row  items-center gap-[3.5rem] mb:gap-[5.5rem]">
                  <div className="">
                    <img
                      src={urlFor(item?.footerBanner_logo).url()}
                      alt=""
                      height={60}
                      width={60}
                    />
                  </div>
                  <ul className="flex items-center gap-[1rem] mb:gap-[2.5rem]">
                    {item?.foot_links?.map((list: any) => {
                      return (
                        <li
                          key={list?._id}
                          className="text-[1.125rem] text-whitecolor font-[400] font-dmSans hover:text-buttoncolor duration-500"
                        >
                          <Link href={list?.slug.current}>{list?.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="[&>ul]:flex [&>a]:items-center [&>ul]:flex-col [&>ul>li]:text-[1.125rem] [&>p]:text-[#FFF] [&>p>a]:text-center [&>p>a]:hover:text-buttoncolor [&>p>a]:duration-500 [&>p>a]:font-[400] [&>p>a]:font-dmSans [&>p>a]:underline [&>a]:max-w-[18.25rem;]">
                  <PortableText value={item?.emailUs} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
