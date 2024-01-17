import CaseStudies_home from '@/components/CaseStudies_home'
import Problem from '@/components/Problem'
import What_we_build from '@/components/What_we_build'
import Who_Renta from '@/components/Who_Renta'
import React from 'react'

const page = () => {
  return (
    <div>
        <CaseStudies_home />
        <Who_Renta />
        <Problem />
        <What_we_build />
    </div>
  )
}

export default page