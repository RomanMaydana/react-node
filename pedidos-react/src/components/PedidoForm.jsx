import React, { Component } from 'react';

class PedidoForm extends Component {
    constructor(props) {         
        super(props);         
        this.state = {             
            mesa: '',             
            responsable: '',            
            descripcion: '',             
            prioridad: 'baja'         
        }     
    } 
 
    handleSubmit = (e) => {        
        e.preventDefault();         
        this.props.onIngresarPedido(this.state);         
        this.setState({             
            mesa: '',             
            responsable: '',             
            descripcion: '',             
            prioridad: 'baja'         
        });     
    } 
 
    handleInputChange = (e) => {         
        const { value, name } = e.target;         
        console.log(value, name);         
        this.setState({             
            [name]: value         
        });     
    } 
    render() { 
        return (  
            <div className="card">                 
                <form onSubmit={this.handleSubmit} className="card-body">                     
                    <div className="form-group">                         
                        <input
                         type="text"                             
                         name="mesa"                             
                         className="form-control"                             
                         value={this.state.mesa}                             
                         onChange={this.handleInputChange}                             
                         placeholder="Mesa"                         
                         />                     
                    </div>                     
                    <div className="form-group">                         
                        <input                             
                        type="text"                             
                        name="responsable"                             
                        className="form-control"                             
                        value={this.state.responsable}                             
                        onChange={this.handleInputChange}                             
                        placeholder="Responsable"                         
                        />                     
                    </div>                     
                    <div className="form-group">                         
                        <input                             
                        type="text"                             
                        name="descripcion"                             
                        className="form-control"                             
                        value={this.state.descripcion}                             
                        onChange={this.handleInputChange}                             
                        placeholder="Descripcion"                         
                        />                     
                    </div>                     
                    <div className="form-group">                         
                        <select                             
                        name="priority"                            
                        className="form-control"                             
                        value={this.state.priority}                            
                        onChange={this.handleInputChange}                         
                         >                             
                        <option>baja</option>                             
                        <option>media</option>                             
                        <option>alta</option>                         
                        </select>                     
                    </div>                     
                    <button type="submit" className="btn btn-primary"> 
                    Guardar           
                    </button>                 
                    </form>             
                    </div>
        );
    }
}
 
export default PedidoForm;