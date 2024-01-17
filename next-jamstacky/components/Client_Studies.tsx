import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import Link from "next/link";
import React from "react";

interface IClient {
  _id: string;
  heading: string;
  studies_list: any;
  image: string;
  year: string;
  title: string;
  description: string;
  button: string;
  label: any;
  slug: any;
}

async function getData() {
  const query = `*[_type == 'client_studies']{
      _id,
        heading,
        studies_list,
    }`;
  const data = await client.fetch(query);
  return data as IClient[];
}

const Client_Studies = async () => {
  const data = (await getData()) as IClient[];
  console.log(data);

  return (
    <div>
      {data.map((item: any) => {
        return (
          <div key={item?._id}>
            <div>{item?.heading}</div>
            <div>
              {item?.studies_list.map((list: any) => {
                console.log(list?.button?.label);

                return (
                  <div>
                    <div>
                      <img
                        src={urlFor(list?.image).url()}
                        width={200}
                        height={150}
                        alt="project-imagex"
                      />
                    </div>
                    <div>
                      <p>{list?.year}</p>
                      <h2>{list?.title}</h2>
                      <p>{list?.description}</p>
                    </div>
                    <div>
                      <Link href={list?.button?.slug?.current}>
                        {list?.button?.label}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Client_Studies;
