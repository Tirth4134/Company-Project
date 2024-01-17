export default {
  name: 'jamstackagency',
  title: 'Jamstackagency',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'traning_image',
      title: 'Traning Image',
      type: 'image',
    },
    {
      name: 'list',
      title: 'List',
      type: 'array',
      of: [
        {
          name: 'agency_list',
          title: 'Agency List',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'image_name',
              title: 'Image Name',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
