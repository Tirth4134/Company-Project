export default {
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'by_name_date',
      title: 'By Name Date',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'read_more',
      title: 'Read More',
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
      name: 'post_title',
      title: 'Post Title',
      type: 'string',
    },
    {
      name: 'post_list',
      title: 'Post List',
      type: 'array',
      of: [
        {
          name: 'post_heading',
          title: 'Post Heading',
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
}
