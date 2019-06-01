import React, { Component } from 'react';

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.props.onRegistro}>
                    <div className="form-group">
                        <label htmlFor="nombres">Nombres y Apellidos</label>
                        <input id="nombres"type="text" className="form-control" name="nombres" placeholder="Nombres y apellidos"/>
    
                    </div>
                    <div className="form-group">
                        <label htmlFor="ci" >CI</label>
                        <input id="ci" type="text" className="form-control" name="ci" placeholder="CI"/>
                    </div>
                    <div className="text-center"> <button type="submit" className="btn btn-primary ">Registro</button></div>
                </form>
            </div>
         );
    }
}
 
export default Registro;