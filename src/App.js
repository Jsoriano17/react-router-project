import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar'
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Container>
        <NavBar />
        <Switch>
          {/* <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/component={NoMatch} /> */}
        </Switch >
      </Container>

    </div>
  );
}

export default App;
