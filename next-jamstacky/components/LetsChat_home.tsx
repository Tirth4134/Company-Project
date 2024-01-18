import client from '@/client/sanity.client';
import React from 'react'
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

interface Icontact {
    _id: string;
    title: string;
    description: string;
    email: any;
    number: string;
    address_time:PortableTextBlock[];
    team_detail: any;
    image:string;
    team_description:PortableTextBlock[];
    connect:any;
    label:any;
    slug:any;
  }
  
  async function getData() {
    const query = `*[_type == 'contact_detail']{
      _id,
      title,
      description,
      email,
      number,
      address_time,
      team_detail,
      team_description,
      connect,


  }`;
    const data = await client.fetch(query);
    return data as Icontact[];
  }


const LetsChat_home = async () => {
    const data = (await getData()) as Icontact[];
  return (
    <div>LetsChat_home</div>
  )
}

export default LetsChat_home