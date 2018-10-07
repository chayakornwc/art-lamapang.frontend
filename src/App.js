import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Navigationbar from './components/navbar';
import Logo from './static/images/lampang.png'
import {Container} from 'reactstrap'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
              <Navigationbar brand={Logo}/>
            </Container>
        </header>
      </div>
    );
  }
}

export default App;
