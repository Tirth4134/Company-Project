import Growth_business from '@/components/Growth_business';
import Headerjamstack from '@/components/Headerjamstack';
import Jam_architecture from '@/components/Jam_architecture';
import Jamstackagency from '@/components/Jamstackagency';
import OurProcess from '@/components/OurProcess';
import Whatis_jam from '@/components/Whatis_jam';
import WhatpeopleSay from '@/components/WhatpeopleSay';
import Why_jamstack from '@/components/Why_jamstack';

import React from 'react'

const page = () => {
  return (
    <div>
        <Headerjamstack />
        <Whatis_jam />
        <Why_jamstack />
        <Jam_architecture />
        <WhatpeopleSay />
        <Jamstackagency />
        <OurProcess />
        <Growth_business />
    </div>
  )
}

export default page;