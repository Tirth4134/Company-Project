import Blog_home from '@/components/Blog_home'
import Category from '@/components/Category'
import Featured_blog from '@/components/Featured_blog'
import Our_blog from '@/components/Our_blog'
import Want_hire_devloper_blog from '@/components/Want_hire_devloper_blog'
import React from 'react'

const page = () => {
  return (
    <div>
      <Blog_home />
      <Category />
      <Featured_blog />
      <Want_hire_devloper_blog />
      <Our_blog />
    </div>
  )
}

export default page