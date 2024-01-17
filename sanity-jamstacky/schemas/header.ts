export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'nav_links',
      title: 'Nav Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
            },
          ],
        },
      ],
    },
    {
      name: 'button',
      title: 'Button',
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
