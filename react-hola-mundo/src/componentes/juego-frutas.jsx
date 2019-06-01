import React, { Component } from 'react';
import MenuPrincipal from './menu';
import Fruta from './fruta';
class JuegoFrutas extends Component {
    Frutas = ["cereza", "frambuesa", "frutilla", "manzana", "naranja", "pinia", "sandia", "uva"];
    constructor(props) {
        super(props);
        this.state = {
            contador1: this.Frutas[0],
            contador2: this.Frutas[1],
            contador3: this.Frutas[2],
            gano: ""
        }
    }

    render() {
        return (
            <div>
                <MenuPrincipal />
                <div className="container mt-4">
                    <div className="col mt-4">
                        <div className="text-center">Juego de Frutas</div>
                        <div className="row mt-2">
                            <div className="col-4">
                                <div><Fruta numero={this.state.contador1}></Fruta></div>
                            </div>
                            <div className="col-4">
                                <div><Fruta numero={this.state.contador2}></Fruta></div>
                            </div>
                            <div className="col-4">
                                <div><Fruta numero={this.state.contador3}></Fruta></div>
                            </div>
                        </div>
                      
                    </div>
                    <div className="row mt-2"> 
                        <div className="col"> 
                            <button className="btn btn-primary btn-block" onClick={this.onClick}> 
                                Jugar 
                            </button> 
                        </div> 
                    </div>
                    <div className="text-center">{this.state.gano}</div>
                </div>
            </div>
        );

    }
    generarIndex = () => {
        return Math.trunc(
            Math.random() * 7
        );
    }
    onClick = () => {
        const num1 = this.generarIndex();
        const num2 = this.generarIndex();
        const num3 = this.generarIndex();
        if (num1 === num2 && num1 === num3) {
            this.setState({
                gano: "Ganooo!!!"
            });
        } else
            this.setState({
                gano: "Intenta una vez mas"
            });
        this.setState({
            contador1: this.Frutas[num1],
            contador2: this.Frutas[num2],
            contador3: this.Frutas[num3],
        });
    }

}

export default JuegoFrutas;