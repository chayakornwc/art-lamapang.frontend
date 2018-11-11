import React, { Component } from 'react';
import {Switch, Route, } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import Navigationbar from './components/navbar';
import Logo from './static/images/lampang.png';
import {Container} from 'reactstrap';
import './scss/app.css';
import 'font-awesome/css/font-awesome.css';

import {routes} from './components/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
              <Navigationbar brand={Logo}/>
            </Container>
        </header>
        {/* begin body of the app */}
        <Switch>
         
              {routes.map((value,index)=>{
                return(
                  <Route path={value.path}
                   key={index}
                   name={value.name} 
                   component={value.component}
                   exact={value.exact} />
                );
              })}
         
        </Switch>
      </div>
    );
  }
}

export default App;