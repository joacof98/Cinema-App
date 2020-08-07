import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Cartelera from './Pages/Cartelera'
import MovieInfo from './Pages/MovieInfo';

// Agregar container para toda la app si es necesaroi
function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exacth path="/cartelera" component={Cartelera} />
        <Route exacth path="/pelicula/:id" component={MovieInfo} />
    </Router>
  );
}

export default App;
