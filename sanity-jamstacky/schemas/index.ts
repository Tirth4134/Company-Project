import Case_studiesRenta_pages from './Case_studies_renta'
import compare_pages from './Compare'
import Edge_caseStudy from './Edge_caseStudy'
import Header_banner from './Header_banner'
import {HireJamstack_dev} from './Hire-Remote-Team'
import main_CaseStudies_pages from './Main_Case_studies'
import WhatPeopleSay from './WhatPeopleSay'
import blog_pages from './blog'
import blog_home from './blog/blog_home'
import book_meeting from './book_meeting'
import estimateProject from './estimateProject'
import footer from './footer'
import header from './header'
import hero_section_case_study_page from './hero_section_case_study_page'
import homeHero_section from './homeHero_section'
import home_technology_section from './home_technology_section'
import homestaff_image from './homestaff_image'
import our_blog from './our_blog'
import pagesTypes from './pages'

export const schemaTypes = [
  homeHero_section,
  hero_section_case_study_page,
  home_technology_section,
  Edge_caseStudy,
  WhatPeopleSay,
  our_blog,
  footer,
  header,
  homestaff_image,
  Header_banner,
  ...pagesTypes,
  ...HireJamstack_dev,
  ...Case_studiesRenta_pages,
  ...main_CaseStudies_pages,
  ...blog_pages,
  ...compare_pages,
    book_meeting,
    estimateProject,
]
