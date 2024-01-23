import client from "@/client/sanity.client";
import Link from "next/link";
import React from "react";

interface Icate {
  _id: any;
  title: string;

  button: any;

  label: any;
  slug: any;
}

async function getData() {
  const query = `*[_type == 'category']{
          _id,
          title, 
          button,      
      }`;
  const data = await client.fetch(query);
  return data as Icate[];
}

const Category = async () => {
  const data = (await getData()) as Icate[];
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div className="px-10 mt-10" key={item?._id}>
            <div className=" bg-[#eaf7ff] p-4 em:p-8 mx-0 em:mx-12 sm:mx-20">
              <h5 className="mb-2 text-center text-pink-700 font-bold block text-[21px] xl:text-[32px] font-dmSans">
                {item?.title}
              </h5>
              <div className="grid grid-cols-9">
                {item?.button.map((btn: any) => {
                  return (
                    <div key={btn?._id}>
                      <ul className=" grid [&>li]:my-[0.25em] [&>li]:mx-[0.3em] hover:[&>li>a]:text-dark-pink [&>li>a]:text-gray-light-color [&>li>a]:text-[15px] xl:[&>li>a]:text-[17px] [&>li>a]:font-bold [&>li>a]:inline-block [&>li>a]:p-0 [&>li>a]:m-[0.3em] [&>li>a]:font-DM">
                        <li className="[&>a]:text-blue text-sm text-center [&>a]:opacity-70">
                          <Link
                            className="hover:text-pink-600 p-7"
                            href={btn?.slug?.current}
                          >
                            {btn?.label}
                          </Link>
                        </li>
                      </ul>
                    </div>
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

export default Category;
