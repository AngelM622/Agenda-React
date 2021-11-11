import React from "react";

var Nombre;
var Apellido;
var Telefono;

export default function Listar() {

    const [equipo, setEquipo] = React.useState([])

    React.useEffect(()=>{
        obtenerDatos()
    },[])

    const obtenerDatos = async () =>{
        const data = await fetch("http://www.raydelto.org/agenda.php")
        const contactos = await data.json()
        console.log(contactos)
        setEquipo(contactos)
    }

    return (
        <div>
            <ul>
                {
                    equipo.map(item =>(
                        <li key={item.id}>{item.nombre} {item.apellido} {item.telefono}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export function Guardar(){
    Nombre= document.getElementById("nombre").value;
    Apellido= document.getElementById("apellido").value;
    Telefono= document.getElementById("telefono").value;
    
    let objeto ={
        nombre: Nombre,
        apellido: Apellido,
        telefono: Telefono
    };
    try {
        let result = fetch('http://www.raydelto.org/agenda.php',{
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    
        console.log("Resultado: " + result)
    } catch (error) {
        console.log("error")
    }


}