import React, { Component } from 'react'
import MenuPrincipal from './menu'
import Contador from './contador';
class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const contador1 = this.generarIndex();
        const contador2 = this.generarIndex();
        const contador3 = this.generarIndex();
            
        return ( <div>
             <MenuPrincipal />
             <div className="container mt-4">
                 <div className="row mt-2">
                    <div className="col-4">
                        <div><Contador valor={contador1}></Contador></div>
                    </div>
                    <div className="col-4">
                        <div><Contador valor={contador2}></Contador></div>
                    </div>
                    <div className="col-4">
                        <div><Contador valor={contador3}></Contador></div>
                    </div>
                 </div>
             </div>
        </div> );
    }
    generarIndex = () =>{
        return Math.trunc(
            Math.random()*10
        );
    }
}
 
export default Props;