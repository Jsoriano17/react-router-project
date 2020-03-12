import React from 'react';
import './App.css';
import NewForm from './NewForm';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import About from './About'
import NavBar from './NavBar'
import { Container } from 'semantic-ui-react'

export default class App extends React.Component {
  state = {
    viruses: [
      {id: 1, name: 'COVID-19', about: 'boomer killer'},
      {id: 2, name: 'Ebola', about: 'A virus that causes severe bleeding, organ failure, and can lead to death.'}
    ],
  }
  render() {
    return (

      <div className="App">
        <NewForm />
        <Container>
          <NavBar />
          <Switch>
            <Route path='/About' component={About} />
          </Switch >
        </Container>
      </div>
    );
  }
}
