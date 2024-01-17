export default{
    name:'why_jamstack',
    title:'Why Jamstack',
    type:'document',
    fields:[
        {
            name:'heading',
            title:'Heading',
            type:'string'
        },
        {
            name:'benifits',
            title:'Benifits',
            type:'array',
            of:[
                    {
                        name:'benifits_list',
                        title:'Benifits List',
                        type:'object',
                        fields:[
                            {
                                name:'image',
                                title:'Image',
                                type:'image'
                            },
                            {
                                name:'title',
                                title:'Title',
                                type:'string'
                            },
                            {
                                name:'description',
                                title:'Description',
                                type:'text',
                            }
                        ]
                    }
                
            ]
        }
        
    ]
}