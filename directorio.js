
//Variables para iniciar el registro
let amigos=[];
let btnGuardar=document.querySelector("#btnGuardar");
let btnCancelar=document.querySelector("#btnCancelar");
let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");

// 
pintar();


function limpiar()
{
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}


function pintar()
{
    if(amigos.length>0)
    {

        lista.innerHTML="";
        amigos.forEach((contacto)=>
        
        
        {
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p><button class="muestraDetalles">
            <input type='hidden' value='${contacto.telefono}'/>Detalles</button>

            <button class="delete" id="delete">
            <input type='hidden' value='${contacto.telefono}'/>Eliminar</button>`;
            
            lista.appendChild(amigo);
        }
        
        );
        let botones=document.getElementsByClassName("muestraDetalles");
        for(let i = 0; i <botones.length; i++)
        {
            const element = botones[i];
           element.addEventListener("click", ()=> { showDetalles(element.children[0].value);});

        }   

        let btnseleminar=document.getElementsByClassName("delete");
        for(let i = 0; i <botones.length; i++)
        {
            const element = btnseleminar[i];
           element.addEventListener("click", ()=> { eliminar(element.children[0].value);});
    
        }
    }
    else

    {
        lista.innerHTML="<h2>No tenemos amigos.<h2>"
    }
}

function showDetalles(tel)
{
    let detalles=document.getElementById("detallesAmigo");
  //  alert(tel);
   let amigo=amigos.find(a=>
    {
 
        if(a.telefono==tel)
        {
            return a;
        }


    });
detalles.innerHTML=` 
    <img src='${amigo.foto}'>
    <h3><${amigo.nombre}/h3>
    <p><span> Telefono:</span>${amigo.telefono}</p>
    <p><span> Correo:</span>${amigo.correo}</p>
    <button id="cerrarShow">Cerrar</button>`;
    
detalles.classList.remove("oculto");
esconderDetalles();
}
///////////////////  acer que cierre la ventana emergente

function esconderDetalles()
{
    let esconder=document.getElementById("cerrarShow");
    esconder.addEventListener("click", ocultar=>
    {
        let ventana=document.getElementById("detallesAmigo")
        ventana.classList.add("oculto");



    });
    

  //  alert(tel);
   
}
//////////////////////////////////////////////////////////////////////////////////////////////

btnCancelar.addEventListener("click",
    
    
    ()=>
    {
        limpiar();
        event.preventDefault();

    }
    
    
    );


    btnGuardar.addEventListener("click",
    
    
    (event)=>
    {
        if(formulario[0].value!="" && formulario[1].value!="" && formulario[2].value!="" && formulario[3].value!="")
        {
        let contacto=
        {

            nombre:formulario['nombre'].value,
            telefono:formulario['telefono'].value,
            correo:formulario['correo'].value,
            foto:formulario['foto'].value


        };

        amigos.push(contacto);
        limpiar();
        pintar();
        event.preventDefault();
    }
    else

    {
        event.preventDefault();
        alert("Faltan Campos por llenar");
        

    }

    }
    
    );


    // eliminar de la lista
function eliminar(tel)
{
event.preventDefault();
//alert("hola");

// for(let i = amigos.length -1; i>=0;  i++)
//         {
//             if(amigos.telefono==tel)

//             {
//               //  amigos.splice(i);
//                 pintar();
//             }

//         }   

}



