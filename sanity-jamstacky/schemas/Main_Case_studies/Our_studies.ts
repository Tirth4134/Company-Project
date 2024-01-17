export default {
  name: 'our_studies',
  title: 'Our Studies',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'case_studies_list',
      title: 'Case Studies List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'list_detail',
              title: 'List Detail',
              type: 'array',
              of: [{type: 'block'}],
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
        },
      ],
    },
  ],
}
