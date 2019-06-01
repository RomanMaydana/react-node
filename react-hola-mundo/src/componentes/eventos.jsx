import React, { Component } from 'react';
import MenuPrincipal from './menu';
import Registro from './alumnos/registro';
import Listado from './alumnos/listado';
class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            alumnos: []
         }
    }
    render() { 
        return ( <div>
            <MenuPrincipal />
             <div className="container mt-4">           
                <div className="row">
                    <div className="col-6">
                        <Registro onRegistro={this.registro}/>
                    </div>
                    <div className="col-6">
                        <Listado alumnos={this.state.alumnos} onBorrar={this.borrar}/>
                    </div>
                </div>
             </div>
        </div> );
    }
    borrar = (ci,e) => {
        e.preventDefault();
        
        const alumnos = this.state.alumnos.filter((a) => {     
            return a.ci !== ci; });
        this.setState({
            alumnos: alumnos
        });
    }
    registro = (event) => {
        event.preventDefault();
        const nombres = event.target.nombres.value;
        const ci = event.target.ci.value;
        const alumno = {nombres,ci};
        this.setState({
            alumnos: [...this.state.alumnos,alumno]
        });
        event.target.nombres.value ='';
        event.target.ci.value = '';
    }
}
 
export default Eventos;