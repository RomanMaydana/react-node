import React, { Component } from 'react';
import './contador.css'
class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="contador" >
                {this.props.valor}
            </div>
        );
    }
}
 
export default Contador;