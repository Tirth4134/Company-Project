export default {
    name:'what_is_jamstack',
    title:'What Is Jamstack',
    type:'document',
    fields:[
        {
            name:"title",
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'array',
            of:[{type:'block'}]
        },
        {
            name:'path_image',
            title:'Path Image',
            type:'image'
        },
        {
           name:'defination',
           title:'Defination',
           type:'text' 
        },
        {
            name:'jam_detail',
            title:'Jam Detail',
            type:'array',
            of:[ {  
                title:'detail',
                type:'object',
                fields:[
                    {
                        name:'jam_title',
                        title:'Jam Title',
                        type:'string',
                    },
                    {
                        name:'jam_description',
                        title:'Jam Description',
                        type:'text'
                    }
                ]
                }
            ]
        }
    ]
}