export default {
    name:'homestaff_image',
    title:'HomeStaff Image',
    type:'document',
    fields:[
        {
            name:'staff_image',
            title:'Staff Image',
            type:'array',
            of:[
                    {
                        name:'images',
                        title:'Images',
                        type:'image'
                    }
            ]
        }
    ]
}