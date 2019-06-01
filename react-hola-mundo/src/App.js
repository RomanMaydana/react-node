import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Principal from './componentes/principal';
import Login from './componentes/login';
import Registro from './componentes/registro';
import Renderizado from './componentes/renderizado';
import Props from './componentes/props';
import Estados from './componentes/estados';
import Eventos from './componentes/eventos';
import Listas from './componentes/listas';
import Formulario from './componentes/formularios';
import Condicional from './componentes/condicional';
import JuegoFrutas from './componentes/juego-frutas';
import Ciclos from './componentes/ciclos';
import Usuarios from './componentes/usuarios';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/renderizado" component={Renderizado} />         
        <Route exact path="/login" component={Login} />         
        <Route exact path="/registro" component={Registro} />         
        <Route exact path="/props" component={Props} />
        <Route exact path="/estados" component={Estados}/> 
        <Route exact path="/eventos" component={Eventos}/> 
        <Route exact path="/listas" component={Listas}/> 
        <Route exact path="/formularios" component={Formulario}/>
        <Route exact path="/condicional" component={Condicional}/>  
        <Route exact path="/juego-frutas" component={JuegoFrutas}/>  
        <Route exact path="/ciclos" component={Ciclos}/>
        <Route exact path="/usuarios" component={Usuarios}/>
      </Switch>
    </Router>
  );
}

export default App;
