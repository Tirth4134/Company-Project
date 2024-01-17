export default {
  name: 'header_banner',
  title: 'Header Banner',
  type: 'document',
  fields: [
    {
      name: 'hire_name',
      title: 'Hire Name',
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

    {
      name: 'hire_image',
      title: 'Hire Image',
      type: 'image',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'array',
      of:[{type:'block'}]
    },
    {
      name: 'wha_image',
      title: 'Wha Image',
      type: 'image',
    },
    {
      name: 'chat_with_us',
      title: 'Chat With Us',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'url',
          title: 'Url',
          type: 'url',
          options: {source: 'slug'},
        },
      ],
    },
    {
      name: 'tel_image',
      title: 'Tel Image',
      type: 'image',
    },
    {
      name: 'telegram_us',
      title: 'Telegram Us',

      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'url',
          title: 'Url',
          type: 'url',
        },
      ],
    },
  ],
}
