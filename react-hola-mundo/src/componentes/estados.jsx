import React, { Component } from 'react'
import MenuPrincipal from './menu';

class Estados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
    }
    render() {
        return (<div>
            <MenuPrincipal /> 
            <div className="col mt-4">
                <div className="text-center mt-4">
                    <h1>{this.state.contador}</h1>
                </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary" onClick={this.incrementar}>
                                Incrementar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={this.decrementar}>
                                Decrementar
                        </button>
                    </div>
            </div>                        
        </div>);
    }
    incrementar = () =>{
        this.setState({
            contador: this.state.contador +1
        });
    }

    
    decrementar = () =>{
        this.setState({
            contador: this.state.contador - 1
        });
    }
}

export default Estados;