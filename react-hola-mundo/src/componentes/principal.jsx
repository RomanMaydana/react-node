import React, { Component } from 'react';
import MenuPrincipal from './menu';

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <MenuPrincipal />
            <div className="container mt-4">
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Declarativo</h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>React te ayuda a crear interfaces de usuario interactivas de
                                    forma sencilla. Diseña vistas simples para cada estado en tu
                                    aplicación, y React se encargará de actualizar y renderizar
                                    de manera eficiente los componentes correctos cuando los datos
                                        cambien.</li>
                                <li>Las vistas declarativas hacen que tu código sea más predecible,
                                        por lo tanto, fácil de depurar.</li>
                            </ul>

                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Aprende una vez, escríbelo donde
sea</h4>
                        </div>
                        <div className="card-body">

                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Crea componentes encapsulados que manejen su propio estado, y
                                        conviértelos en interfaces de usuario complejas.</li>
                                <li>Ya que la lógica de los componentes está escrita en JavaScript y
                                    no en plantillas, puedes pasar datos de forma sencilla a través de
tu
                                         aplicación y mantener el estado fuera del DOM.</li>
                            </ul>

                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Revisión de Documentos</h4>
                        </div>
                        <div className="card-body">

                            <ul className="list-unstyled mt-3 mb-4">
                                <li>En React no dejamos fuera al resto de tus herramientas tecnológi
cas,
                                     así que podrás desarrollar nuevas características sin necesidad de
                                          volver a escribir el código existente.</li>
                                <li>React puede también renderizar desde el servidor usando Node, así
como
                                        potencializar aplicaciones móviles usando React Native.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

        </div>);
    }
}

export default Principal;



