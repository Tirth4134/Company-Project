import Client_Studies from '@/components/Client_Studies'
import FAQsection from '@/components/FAQsection'
import Hirejam_home from '@/components/Hirejam_home'
import HowodoesItWork from '@/components/HowodoesItWork'
import TechnologiesforJam from '@/components/TechnologiesforJam'
import Why_hire from '@/components/Why_hire'
import Whychoosejam from '@/components/Whychoosejam'
import Whydoneed from '@/components/Whydoneed'
import React from 'react'

const page = () => {
  return (
    <div>
       <Hirejam_home />
       <Why_hire />
       <TechnologiesforJam />
       <Whydoneed />
       <HowodoesItWork />
       <FAQsection />
       <Whychoosejam />
       <Client_Studies />
       
        
    </div>

  )
}

export default page