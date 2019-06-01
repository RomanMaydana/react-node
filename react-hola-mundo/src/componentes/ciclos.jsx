import React, { Component } from 'react';
import MenuPrincipal from './menu'
class Ciclos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paises: []
        }
    }
    componentWillMount() {
        fetch('https://restcountries.eu/rest/v2/all').then((response) => {
            return response.json();
        }).then((art) => {
            this.setState({ paises: art })
        })
    }
    render() {
        return (
           <div>
                <MenuPrincipal/>
                <div class="container">
                <table  className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Capital</th>
                            <th>Poblacion</th>
                            <th>Region</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.paises.map(pais => (
                            <tr key={pais.name}>
                                <td>{pais.name}</td>
                                <td>{pais.capital}</td>
                                <td>{pais.population}</td>
                                <td>{pais.region}</td>
                                
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
           </div>
        );
    }
}

export default Ciclos;