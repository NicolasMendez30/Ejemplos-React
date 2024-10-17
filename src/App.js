import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Paginas/login';
//componentes de routeo = administrador de rutas 
function App() {
  return (
   <Fragment>
    <Router>
      <Routes>
        <Route path='/' exact element = {<Login/>} />
          
      </Routes>
    </Router>
   </Fragment>
  );
}

export default App;
