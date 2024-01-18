export default {
  name: 'client_studies',
  title: 'Client Studies',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'studies_list',
      title: 'Studies List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
                name:'image',
                title:'Image',
                type:'image'
            },
            {
              name: 'year',
              title: 'Year',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
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
    {
      name:'time_image',
      title:'Time Image',
      type:'image',
  }
  ],
}
