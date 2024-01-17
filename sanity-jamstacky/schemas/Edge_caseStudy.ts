export default {
  name: 'edge_caseStudy',
  title: 'Edge CaseStudy',
  type: 'document',
  fields: [
    {
      name: 'edge_heading',
      title: 'Edge Heading',
      type: 'string',
    },
    {
      name: 'circle_image',
      title: 'Circle Image',
      type: 'image',
    },
    {
      name: 'edge_blog',
      title: 'Edge Blog',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'client_image',
      title: 'Client Image',
      type: 'image',
    },
    {
      name: 'image_name',
      title: 'Image Name',
      type: 'string',
    },
    {
      name: 'case_study_button',
      title: 'Case Study Button',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
        },
      ],
    },
  ],
}
