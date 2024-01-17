export default {
    name:'headerJmastack_home',
    title:'Header Jamstack Home',
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
            name:'jamstack_image',
            title:'Jamstack Image',
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
            name:'project_button',
            title:'Project Button',
            type:'string'
        },
        {
            name:'plans_and_pricing_button',
            title:'Plan And Pricing Button',
            type:'string'
        }
    ]
}