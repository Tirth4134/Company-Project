export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'footer_text',
      title: 'Footer Text',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'footer_image',
      title: 'Footer Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'footer_button',
      title: 'Footer Button',
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
    {
      name: 'emailus_link',
      title: 'Emailus Link',
      type: 'string',
    },

    {
      name: 'footerBanner_logo',
      title: 'Footer Banner Logo',
      type: 'image',
    },
    {
      name: 'foot_links',
      title: 'Foot Links',
      type: 'array',
      of: [
        {
          type:'object',
          fields:[
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'slug',
              title: 'slug',
              type: 'slug',
              options:{source : 'slug'},
            }
          ]
        }
      ], /** label_link */
    },
    {
      name: 'emailUs',
      title: 'Email us',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
