import React, { Component } from 'react'

class Frm extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <p>Ingrese Nùmero:
                        <input type="number" name="valor1" />
                    </p>
                    <p>
                        <input type="submit" name="Calcular" />
                    </p>
                </form>
            </div>
        );
    }
    submit = (e) => {
        e.preventDefault();
        const v1 = parseInt(e.target.valor1.value, 10);
        const cal = this.factorial(v1);
        alert(`Cálculo del factororial de número ${v1} es ${cal}`);
    }

    factorial = (num) => {
        if (num == 0) 
            return 1;
        
        else 
            return this.factorial(num - 1) * num;
        
    }
}

export default Frm