export default{
    profile:{
        name:"Magdiel Jimenez",
        image:"logo.png",
        onClick(){
            console.log("Holi crayoli");
        }
    },
    items:[
        {
            id:0,
            title:"Proveedores",
            path:"#/supplier-validator",
            icon:'fa-truck-field',
            onClick(){
                console.log("Proveedores");
            },
            hasChildren:true,
            children:[
                {
                    id:0,
                    name:"Configuración",
                    path:"#/supplier-validator"
                },
                {
                    id:1,
                    name:"Peticiones",
                    path:"#/configure-modules"
                }
            ]
        },
        {
            id:1,
            title:"Permisos",
            path:"/",
            icon:'fa-circle-exclamation',
            onClick(){
                console.log("Permisos");
            },
            hasChildren:false,

        },
        {
            id:2,
            title:"Soporte",
            icon:'fa-screwdriver-wrench',
            path:"#/MiComponente",
            onClick(){
                console.log("Soporte");
            },
            hasChildren:false,

        },
        {
            id:3,
            title:"Configura módulos",
            icon:'fa-gears',
            path:"#/configure-modules",
            onClick(){
                console.log("Configura");
            },
            hasChildren:false,

        },
        {
            id:4,
            title:"Academia MX+",
            icon:'fa-user-graduate',
            path:"/",
            onClick(){
                console.log("Academia");
            },
            hasChildren:false,

        }
    ]
}