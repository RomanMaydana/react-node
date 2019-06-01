import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src="images/logocolor.png" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Conceptos
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/renderizado">Renderizado de elementos</Link>
                                <Link className="dropdown-item" to="/props">Componentes y props </Link>
                                <Link className="dropdown-item" to="/estados">Estado y ciclo de vida</Link>
                                <Link className="dropdown-item" to="/eventos">Eventos</Link>
                                <Link className="dropdown-item" to="/condicional">Renderizado condicional</Link>
                                <Link className="dropdown-item" to="/listas">Lista y llaves</Link>
                                <Link className="dropdown-item" to="/formularios">Formulario</Link>
                                <Link className="dropdown-item" to="/juego-frutas">Juego de Frutas</Link>
                                <Link className="dropdown-item" to="/ciclos">Ciclos</Link>
                                <Link className="dropdown-item" to="/usuarios">Usuarios</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>

        </div>);
    }
}

export default Menu;