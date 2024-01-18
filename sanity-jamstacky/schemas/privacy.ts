export default{
    name:'company_privacy',
    title:'Company Privacy',
    type:'document',
    fields:[
        {
            name:'heading',
            title:'Heading',
            type:'string',
        },
        {
            name:'update',
            title:'Update',
            type:'string',
        },
        {
            name:'description',
            title:'Description',
            type:'array',
            of:[
                {
                    type:'block'
                }
            ]
        }
    ]
}