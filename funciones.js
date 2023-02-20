/* Escribir una función en JavaScript que recoja la información de los campos de texto en formato
JSON cada vez que se pulse el botón "solicitar información". Esta información se debe guardar en
un array. */
 

let contactosArr = [];

function contacto(){ 

    let newCont = { "nombre": document.getElementById("nom").value,
                    "apellidos": document.getElementById("ape").value,
                    "origen": document.getElementById("ori").value,
                    "destino": document.getElementById("des").value,
                    "pasajeros": document.getElementById("pax").value,
                    "fecha": document.getElementById("fec").value
    };    

    contactosArr.push(newCont);  
 
    console.log(contactosArr);

};



/* 
Escribe ahora una segunda función en JavaScript que cada vez que se pulse el botón "filtrar", nos 
muestre por consola la información de las solicitudes recibidas que tengan como destino 
Canarias, Mallorca y Galicia (tener en cuenta que los usuarios pueden escribir, el destino en 
mayuscula o minuscula) */


function filter(){
    
    let destinoFil = [];

    for ( let i = 0 ; i < contactosArr.length ; i++ ){
        let paxDes = "";

        if(contactosArr[i].destino.toLowerCase() == "canarias" || contactosArr[i].destino.toLowerCase() == "mallorca" || contactosArr[i].destino.toLowerCase() == "galicia" ){
            paxDes = contactosArr[i] 
            destinoFil.push(paxDes);   
        };      
    };                                         
    console.log( destinoFil );  

    let contactoFilter = "";
    
        for ( let i = 0 ; i < destinoFil.length ; i++ ){ 
            contactoFilter += ` <ul>
                                <li>Nombre: ${destinoFil[i].nombre} </li>
                                <li>Apellidos: ${destinoFil[i].apellidos} </li>
                                <li>Destino: ${destinoFil[i].destino}</li>
                                </ul> `  
            document.getElementById("destinosFiltrados").innerHTML = contactoFilter;
        };       
};


/* Modifica la función anterior para que ahora muestre esos datos en una en la landing page 
maquetada anteriormente */


     