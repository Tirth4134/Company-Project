export default {
  name: 'contact_detail',
  title: 'Contact Detail',
  type:'document',
  fields:[
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
      name: 'email_number',
      title: 'Email Number',
      type: 'array',
      of:[
        {
        type:'block'
      }
    ]
    },
    {
      name: 'address_time',
      title: 'Address Time',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'team_detail',
      title: 'Team Detail',
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
              name: 'team_description',
              title: 'Team Description',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
            },
            {
              name: 'contact',
              title: 'contact',
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
