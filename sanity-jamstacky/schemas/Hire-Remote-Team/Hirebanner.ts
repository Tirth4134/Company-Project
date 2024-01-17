export default {
    name:'hire_banner',
    title:'Hire Banner',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'defination',
            title:'Defination',
            type:'text'
        },
        {
            name:'hireremote_image',
            title:'Hireremote Image',
            type:'image',
            fields:[
                {
                    name:'alt',
                    title:'Alt',
                    type:'string'
                }
            ]
        },
        {
            name:'call_button',
            title:'Project Button',
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
            name:'plans_and_pricing_button',
            title:'Plan And Pricing Button',
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
        }
    ]
}