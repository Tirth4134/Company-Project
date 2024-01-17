import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Iarchi {
  _id: string;
  title: string;
  image: string;
  description: PortableTextBlock[];
  reviews_online: any;
  heading: string;
  heading_detail: PortableTextBlock[];
  review_image: string;
  button: any;
  slug: any;
  label: string;
  star_image:string;
}

async function getData() {
  const query = `*[_type == "jamstack_architecture"]{
    title,
    "image":image.asset->url,
    description,
    reviews_online,
}`;
  const data = await client.fetch(query);
  return data as Iarchi[];
}

const Jam_architecture = async () => {
  const data = (await getData()) as Iarchi[];
  console.log(data);

  return (
    <div>
      {data.map((item) => {
        console.log(item?.reviews_online?.star_image);

        return (
          <>
            <div key={item?._id}>
              <div className="container">
                <div className="max-w-[850px] mt-[0] ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px]">
                  <h5 className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-title-blue-shade">
                    {item?.title}
                  </h5>
                </div>
                <div className="mt-12 [&amp;>img]:max-h-[24em] [&amp;>img]:block [&amp;>img]:mx-auto [&amp;>img]:my-8 ">
                  {/* <img alt="JAMSTACK ARCHITECTURE" loading="lazy" width="1801" height="577"
        decoding="async" data-nimg="1" srcset="https://cdn.sanity.io/images/jaqhm6yh/production/8fcb876a617a5839a5904d8fc121be579af5ce2c-1801x577.png?w=1920&amp;q=100&amp;fit=clip&amp;auto=format 1x, https://cdn.sanity.io/images/jaqhm6yh/production/8fcb876a617a5839a5904d8fc121be579af5ce2c-1801x577.png?w=3840&amp;q=100&amp;fit=clip&amp;auto=format 2x"
        src="https://cdn.sanity.io/images/jaqhm6yh/production/8fcb876a617a5839a5904d8fc121be579af5ce2c-1801x577.png?w=3840&amp;q=100&amp;fit=clip&amp;auto=format"
        style="color: transparent;"> */}
                  <Image
                    src={item?.image}
                    width={1801}
                    height={577}
                    alt="architecture"
                  />
                </div>
                <div className="block max-w-[84em] xl:max-w-[73em] w-full mx-auto my-0 pl-8  mt-6  font-DM  [&>ul>li]:list-disc">
                  <PortableText value={item?.description} />
                </div>
              </div>
              <div>
              <div className="container">
    <div className="p-6 md:p-8 md:p-[2.9375em]  block md:flex justify-between items-center bg-review-gradient">
        <div className="w-full md:w-[50%] emd:w-[65%] [&amp;>p]:text-[#fff] [&amp;>p]:text-[12.6px] em:[&amp;>p]:text-[14.175px] emd:[&amp;>p]:text-[15.75px] xl:[&amp;>p]:text-[18px] [&amp;>p]:font-Inter [&amp;>p]:tracking-[0.05em] [&amp;>p]:leading-[25px] em:[&amp;>p]:leading-[30px] [&amp;>p]:pb-8 [&amp;>a]:py-[1em] [&amp;>a]:px-[2.5em] [&amp;>a]:text-[12.6px] em:[&amp;>a]:text-[14.175px] emd:[&amp;>a]:text-[15.75px] xl:[&amp;>a]:text-[18px] hover:[&amp;>a]:bg-btn-hover-pink hover:[&amp;>a]:text-white-color [&amp;>a]:font-bold">
            <div className="mb-[0.7em] [&amp;>h4]:font-DM [&amp;>h4]:text-[21px] em:[&amp;>h4]:text-[26.25px] xl:[&amp;>h4]:text-[30px] [&amp;>h4]:text-white-color [&amp;>h4]:font-bold inline-flex flex-wrap items-baseline [&amp;>img]:max-w-[6em] [&amp;>img]:mt-[0.6em] sm:[&amp;>img]:mt-[0.75em] [&amp;>img]:mx-[0.5em] [&amp;>p]:text-[15.75px] xl:[&amp;>p]:text-[18px] hover:[&amp;>a]:shadow-review-btn">
                `
                <h4>
                    “We constantly receive 5
                </h4>
                {/* <img alt="" loading="lazy" width="371" height="75" decoding="async" data-nimg="1"
                srcset="https://cdn.sanity.io/images/jaqhm6yh/production/27671412ffba7ad6d2ca742a9f076e759ebd1135-371x75.gif?w=384&amp;q=100&amp;fit=clip&amp;auto=format 1x, https://cdn.sanity.io/images/jaqhm6yh/production/27671412ffba7ad6d2ca742a9f076e759ebd1135-371x75.gif?w=750&amp;q=100&amp;fit=clip&amp;auto=format 2x"
                src="https://cdn.sanity.io/images/jaqhm6yh/production/27671412ffba7ad6d2ca742a9f076e759ebd1135-371x75.gif?w=750&amp;q=100&amp;fit=clip&amp;auto=format"
                style="color: transparent;"> */}
                <img src={urlFor(item?.reviews_online?.star_image).url()} alt="star" height={75} width={371} />
                <h4>
                    reviews online“
                </h4>
            </div>
            <PortableText  value={item?.reviews_online?.heading_detail}/>
            <div>
            <Link aria-label="Book free consultation" className="text-[1.125em] font-bold leading-[1.25em] text-white-color bg-pink-700 hover:bg-dark-blue inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center"
            href={item?.reviews_online?.button?.slug.current}>
               {item?.reviews_online?.button?.label}
            </Link>
            </div>
        </div>
        <div className="w-full md:w-[50%] emd:w-[30%] text-center md:text-left mt-12 md:mt-[0] [&amp;>img]:max-w-[23.125em] [&amp;>img]:max-h-[16.875em] [&amp;>img]:ml-auto [&amp;>img]:mr-auto md:[&amp;>img]:mr-0">
            {/* <img alt="Reviewsimage" loading="lazy" width="554" height="405" decoding="async"
            data-nimg="1" srcset="https://cdn.sanity.io/images/jaqhm6yh/production/5ee3fb8f5b4b19f0bed7232106f4dfd8e53f128d-554x405.png?w=640&amp;q=100&amp;fit=clip&amp;auto=format 1x, https://cdn.sanity.io/images/jaqhm6yh/production/5ee3fb8f5b4b19f0bed7232106f4dfd8e53f128d-554x405.png?w=1200&amp;q=100&amp;fit=clip&amp;auto=format 2x"
            src="https://cdn.sanity.io/images/jaqhm6yh/production/5ee3fb8f5b4b19f0bed7232106f4dfd8e53f128d-554x405.png?w=1200&amp;q=100&amp;fit=clip&amp;auto=format"
            style="color: transparent;"> */}
            <img src={urlFor(item?.reviews_online?.review_image).url()}  width={554} height={405} alt="reviewImage"/>
        </div>
    </div>
</div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Jam_architecture;
