import React from "react";
import "./estilo.css";
import Listar from "./Padre";
import { Guardar } from "./Padre";

export function App() {
    return (<div>    
        <section class="formulario">
    <h1>Agenda</h1>
    <form>
        <div class="agenda">
            <label>Nombre: </label>
            <input type="text"  id="nombre"/>
        </div>

        <div class="agenda">
            <label>Apellido: </label>
            <input type="text" id="apellido"/>
        </div>

        <div class="agenda">
            <label>Telefono: </label>
            <input type="text" id="telefono"/>
        </div>

        <div class="botones">
            <input onClick={Guardar} type="submit" value="Guardar datos" id="Guardar"/>
        </div>

    </form>
</section>

<div class="lista" id="listas">
    <h1>Contactos:</h1>
    <Listar />
</div></div>)

}

