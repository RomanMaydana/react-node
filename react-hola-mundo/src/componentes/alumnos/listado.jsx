import React, { Component } from 'react';

class Listado extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombres</th>
                            <th scope="col">CI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.alumnos.map((alumno)=> (
                            <tr>
                                <td>{alumno.nombres}</td>
                                <td>{alumno.ci}</td>
                                <td> <div className="text-center"> <button type="submit" className="btn btn-danger" onClick={(e) => this.props.onBorrar(alumno.ci, e)}>Borrar</button></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Listado;