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
  // console.log(data);

  return (
    <div id="introcall-section">
      {data?.map((item) => {
        // console.log(item?.footer_button);

        return (
          <div key={item?._id} className="bg-whitecolor shadow-footerShadow">
            {/* top section */}
            <div className="max-w-[90rem] m-auto py-[1rem] mb:py-[2.63rem] px-[1rem] gap-[1rem]  md:flex-row flex items-center justify-center md:justify-between">
              <div className="[&>h2]:text-[1.5rem] [&>h3]:font-[500] [&>h3]:text-titlecolor [&>h3]:text-center [&>h3]:mb:text-left [&>h3]:max-w-[32.8rem] [&>h3]:font-dmSans [&>p]:text-[1rem] [&>p]:font-[400] [&>p]:text-footertextcolor [&>p]:max-w-[49.8rem] [&>p]:my-[0.9rem] [&>p]:text-center [&>p]:mb:text-left [&>p]:font-dmSans  [&>p]:leading-[1.5rem] ">
                <PortableText
                  value={item?.footer_text}
                  // serializers={richText}
                />
              </div>
              <div className="[&>p]:text-[1rem] [&>p]:my-[1.25rem]  [&>p]:text-center [&>p]:mb:text-left [&>p]:font-[400] [&>p]:text-footertextcolor  [&>p]:font-dmSans [&>p>a]:text-lightblue [&>p>a]:font-[400] [&>p>a]:underline">
                <img
                  src={urlFor(item?.footer_image).url()}
                  alt=""
                  height={150}
                  width={150}
                />
                <div className="text-[1rem] mb:text-[1.125rem] font-[700] shadow-buttonshdow text-whitecolor font-dmSans leading-[1.25rem] py-[1rem] mb:py-[1.25rem] px-[1rem] mb:px-[1.62rem] bg-blue rounded-[3.5rem]">
                  <Link href={item?.footer_button?.slug.current}>
                    {item?.footer_button?.label}
                  </Link>
                </div>
                {/* <PortableText
                  value={item?.emailus_link}
                  // serializers={richText}
                /> */}
                <div>
                  or email us at <button>{item?.emailus_link}</button>
                </div>
              </div>
            </div>

            {/* bottom section */}
            <div className=" bg-cyan-900   py-[1rem]  ">
              <div className="max-w-[90rem] m-auto flex items-center  flex-col md:flex-row justify-center  gap-[1rem] md:justify-between px-[1rem]">
                <div className="flex  mb:flex-row  items-center gap-[3.5rem] mb:gap-[5.5rem]">
                  <div className="">
                    <img
                      src={urlFor(item?.footerBanner_logo).url()}
                      alt=""
                      height={60}
                      width={60}
                    />
                    {/* <Image  src={} /> */}
                  </div>
                  <ul className="flex items-center gap-[1rem] mb:gap-[2.5rem]">
                    {item?.foot_links?.map((list: any) => {
                      // console.log(list);
                      return (
                        <li
                          key={list?._id}
                          className="text-[1.125rem] text-whitecolor text-center font-[400] font-dmSans max-w-[6.9375rem]"
                        >
                          <Link href={list?.slug.current}>{list?.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="[&>ul]:flex [&>ul]:items-end [&>ul]:flex-col [&>ul>li]:text-[1.125rem] [&>ul>li]:text-[#FFF] [&>ul>li]:text-center [&>ul>li]:font-[400] [&>ul>li]:font-dmSans [&>ul>li>a]:underline [&>ul>li]:max-w-[18.25rem;]">
                  <PortableText
                    value={item?.emailUs}
                    // serializers={richText}
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

export default Footer;
