import React, { Component } from 'react';

class Fruta extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        const image = `images/${this.props.numero}.png`.toString();
        return ( 
            <div>
                <img src={image} />
            </div>
         );

         
    }

}
 
export default Fruta;