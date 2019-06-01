import React, { Component } from 'react';

class Pedido extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    pedidoDelete = () => {
        console.log(this.props.mesa);
        this.props.deletePedido(this.props.mesa);
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-title text-center">
                        <h3>{this.props.mesa}</h3>
                        <span className="badge badge-pill badge-danger ml-2">                         
                        {this.props.prioridad}                         
                        </span>                     
                        </div>                     
                        <div className="card-body">                         
                        <h6>                             
                            <span className="glyphicon glyphicon-user">
                                </span>                             
                                {this.props.responsable}                         </h6>                         <hr />
                        {this.props.descripcion}
                    </div>
                    <div className="card-footer">
                        <button
                            className="btn btn-danger"
                            onClick={this.pedidoDelete}
                        >
                            Eliminar                         </button>                     </div>                 </div>             </div>
        );
    }
}

export default Pedido;