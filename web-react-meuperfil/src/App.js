import React, {Component} from "react";
import './App.css';
import Fotos from './foto';
import Dados from './dados';

class App extends Component {

    render(){
      return(
        <div>
          <Fotos/>, <Dados/>
        </div>
      );
    }
}

export default App;