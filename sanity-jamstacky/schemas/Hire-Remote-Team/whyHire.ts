export default {
  name: 'whyhire',
  title: 'Why Hire',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'skillList',
      title: 'Skill list',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'text',
              title: 'Text ',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
