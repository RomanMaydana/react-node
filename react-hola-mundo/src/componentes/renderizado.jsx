import React, { Component } from 'react'
import MenuPrincipal from './menu'
class Renderizado extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    generarAletorio = () => {         
        return Math.trunc(Math.random() * 10);     
    }
    render() { 
        const alumno = {             
            id: 1, 
            nombres: 'Ana', 
            apellidos: 'Gomez'          
        };
        return ( <div>
            <MenuPrincipal />                 
            <div className="container mt-2">                     
            <h1>Titulo</h1>                     
            <hr />                     
            <p>Contenido del titulo, codigo jsx</p>                     
            <p>Calculando 2018 + 1 = {2018 + 1} </p>                     
            <p>Alumno : {alumno.nombres} {alumno.apellidos} </p>                     
            <p>Numero de suerte : {this.generarAletorio()}</p>                     
            <p>La Hora es : {new Date().toLocaleTimeString()} </p>                
             </div>
        </div> );
    }
}
 
export default Renderizado;