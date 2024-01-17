export default {
  name: 'our_blog',
  title: 'Our Blog',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },

    {
      name: 'blog',
      title: 'Blog ',
      type: 'array',
      of: [
        {
          name: 'blog_list',
          title: 'Blog List',
          type: 'object',
          fields: [
            {
              name: 'blog_image',
              title: 'Blog Image',
              type: 'image',
            },

            {
              name: 'blog_button',
              title: 'Blog Button',
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
                      options: {source: 'slug'},
                    },
                  ],
                },
              ],
            },
            {
              name: 'arrow_image',
              title: 'Arrow Image',
              type: 'image',
            },
            {
              name: 'blog_description',
              title: 'blog_description',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
    {
      name: 'view_more_blogs_button',
      title: 'View More Blogs Button',
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
