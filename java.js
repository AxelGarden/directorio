// var personas=["Axel Flores","memo","jard mode"];

// // splice para borrar push para agregar
// // dentro de un arreglo   la posicion [] y si es otro arreglo es [][]


// //otra forma de hacer array

// var persones =
//     {


//         "Nombre":"Axel", "Apellido" : "Flores", "Edad":"22","Correo":"axel@gmail.com","contraseña":"12345"


//     }


//     //como crear clases

// class nombredelaclase
// {

//     constructor (nombree,apelliddo)
//     {
//         this.nombree="hola",
//         this.apelliddo=":D"
//     }

// }

// var elMemo= new nombredelaclase("","");


// //otra forma de crear variables


// function laPersona(nombre,apellido){ this.nombre=nombre , this.apellido=apellido}

// var elchino= new laPersona("chino","chainis");



// var alummos =
// [

// {nombre:"Axel",Edad:22},
// {nombre:"guille",Edad:24}


// ]



// //arrow funtion o variable anonima


// function lafuncion(variable1)
// {
//     return variable*2;
// }

// //otras formas de como hacerlas

// (variable1)=>{return variable1*2}

// (variable1)=> variable1*2;
// ()=>variable1*2;



// var articulos = 
// [

// {nombre:"bici",costo:3000},
// {nombre:"Tv",costo:2500},
// {nombre:"Libro",costo:320},
// {nombre:"Celular",costo:10000},
// {nombre:"Laptop",costo:20000},
// {nombre:"Teclado",costo:500},
// {nombre:"Audifonos",costo:1700}



// ]

// articulos.foreach(valor) 
// {
//     console.log(valor.nombre);
    
// }


// var articuloscaros =articulos.filter((valor)=> { if(valor.costo>2000) return valor; })


// var artucilosDescuento=articulos.map((articulos)=>{return {nombre:articulos.nombre,costo:articulos.costo*0.8}} )



let nombres =
[
    {nombre:"Guillermo", edad:30, sexo:"M"
    }
    ,{nombre:"Josue",edad:22,sexo:"M"},
    {nombre:"Chino",edad:20 ,sexo:"M"},
    {nombre:"Arely",edad:21,sexo:"W"},
    {nombre:"Samuel",edad:22,sexo:"M"}];

let hombresJovenes=nombres.filter(
    persona =>
    {
        if(persona.sexo=="M" && persona.edad<25)
        {
            return persona.edad;

        }
    })


// para las comillas feas esas  altGR + } llave de cierre
    // let saludos=nombres.map(persona =>{ 
    //     let sueldo=0;
    //     if(persona.edad>30)
    //     {
    //          sueldo=10000
    //     }
    //     return {nombre:persona.nombre,sueldo:sueldo};
    //     //    "hola"+ $(persona.nombre) +"tu edad es de "+ $(persona.edad);
        
        
    //     })
// para buscar como en MYSQL  like usas el  personas.nombre.includes()


    // let mujer= nombres.find(persona=>{ 
    //     if(persona.sexo=="W")
    //     {
    //         return persona.nombre
    //     }
    
    
    
    // })


    // nombres.forEach(persona=>
        
    //     {

    //       console.log(persona.nombre);


    //     }
        
        
    //     )


    //     let Mayores=nombres.some(persona=>{

    //         if(persona.edad)
    //         {
    //             return true;
    //         }
    //     })


    ///  JUGAR CON LA ESTRUCTURA DE HTML
    let contenedor= document.getElementById("contenedor");


    let input=document.querySelector("#input");
    let botoncito=document.querySelector("#botoncito");

    botoncito.addEventListener("click",()=> contenedor.innerText=input.value  ,  contenedor.className="sombreado" );

    input.addEventListener("keyup", ()=> 
    {
         if(input.value.length>3)
          {
            contenedor.innerText=input.value;
            contenedor.className="exito";
          }
          else
          {
            contenedor.innerText=input.value
            contenedor.className="falla";
          }
    
    
    })