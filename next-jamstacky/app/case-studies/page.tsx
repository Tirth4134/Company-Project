import CaseStudies_home_main from '@/components/CaseStudies_home_main'
import Case_hireDeveloper from '@/components/Case_hireDeveloper'
import Ourstudies from '@/components/Ourstudies'
import React from 'react'

const page = () => {
  return (
    <div>
      <CaseStudies_home_main />
      <Ourstudies />
      <Case_hireDeveloper />
    </div>
  )
}

export default page