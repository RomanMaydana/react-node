import React, { Component } from 'react';
import MenuPrincipal from './menu';
import axios from 'axios';

class Usuarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
            login: '',
            nombreCompleto: '',
            email: '',
            password: '',
            id: 0,
            isEdit: false
        }
    }

    componentDidMount() {
        axios.get('http://192.168.2.120:5000/api-cognos/usuarios/')
            .then(res => {
                const usuarios = res.data;
                this.setState({ usuarios });
            })
    }
    handleInputChange = (e) => {
        const { value, name } = e.target;
        
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                <MenuPrincipal />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-4">
                            <form onSubmit={this.registro}>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="login" placeholder="Login" onChange={this.handleInputChange} value={this.state.login} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleInputChange} value={this.state.password} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="nombreCompleto" placeholder="Nombres Completo" onChange={this.handleInputChange} value={this.state.nombreCompleto} />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.handleInputChange} value={this.state.email} />
                                </div>
                                <button type="submit" className="btn btn-primary" >{!this.state.isEdit ? 'Guardar' : 'Editar'}</button>
                            </form>
                        </div>
                        <div className="col-8">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Usuario</th>
                                        <th>Nombre Completo</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.usuarios.map((usuario, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{usuario.id}</td>
                                                <td>{usuario.login}</td>
                                                <td>{usuario.nombreCompleto}</td>
                                                <td>{usuario.email}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() =>
                                                        this.remover(usuario.id)} >Borrar</button>
                                                    <button className="btn btn-secondary" onClick={() =>
                                                        this.editar(usuario.id)} >editar</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    registro = (e) => {
        e.preventDefault();
       
        if (this.state.login !== '' && this.state.nombreCompleto !== '' && this.state.email !== '' && this.state.password !== '') {
            if (!this.state.isEdit) {
                const usuario = {
                    id: this.state.usuarios.length + 1,
                    login: this.state.login,
                    nombreCompleto: this.state.nombreCompleto,
                    email: this.state.email,
                    password: this.state.password
                }
                console.log(usuario);
                axios.post('http://192.168.2.120:5000/api-cognos/usuarios', usuario)
                    .then(res => {
                        this.setState({
                            usuarios: [...this.state.usuarios, usuario],
                            id: 0,
                            login: '',
                            nombreCompleto:'',
                            email: '',
                            password: ''
                        })
                    });
            } else {
                const usuario = {
                    id: this.state.id,
                    login: this.state.login,
                    nombreCompleto: this.state.nombreCompleto,
                    email: this.state.email,
                    password: this.state.password
                }
                console.log(usuario);
                axios.put(`http://192.168.2.120:5000/api-cognos/usuarios/${this.state.id}`, usuario).then(
                    res => {
                        const usuarios = [];
                        this.state.usuarios.map((usu) => {
                            if (usu.id === usuario.id) {
                                usuarios.push(usuario);
                            } else {
                                usuarios.push(usu);
                            }
                        })
                        this.setState({
                            usuarios: usuarios,
                            id: 0,
                            login: '',
                            nombreCompleto:'',
                            email: '',
                            password: '',
                            isEdit:false
                        });
                    }
                );
            }
        } else{
            alert('Complete formulario');
        }
    }

    remover = (id) => {
        axios.delete(`http://192.168.2.120:5000/api-cognos/usuarios/${id}`)
            .then(res => {
                const usuariosFiltro = this.state.usuarios.filter((usuario) => {
                    return usuario.id !== id;
                });
                this.setState({ usuarios: usuariosFiltro });
            })
    }
    editar = (id) => {
        axios.get(`http://192.168.2.120:5000/api-cognos/usuarios/${id}`).then(
            res => {
                console.log(res);
                this.setState(
                    {
                        login: res.data.datos[0].login,
                        nombreCompleto: res.data.datos[0].nombreCompleto,
                        email: res.data.datos[0].email,
                        password: res.data.datos[0].password,
                        id: res.data.datos[0].id,
                        isEdit: true
                    }
                );

            }
        )
    }
}

export default Usuarios;