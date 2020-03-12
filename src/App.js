import React from 'react';
import './App.css';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import About from './About'
import NavBar from './NavBar'
import { Container } from 'semantic-ui-react'
import Virus from './Virus'

export default class App extends React.Component {
  state = {
    viruses: [
      { id: 1, name: 'COVID-19', about: 'boomer killer' },
      { id: 2, name: 'Ebola', about: 'A virus that causes severe bleeding, organ failure, and can lead to death.' }
    ],
  }
  render() {
    return (

      <div className="App">
        <Container>
          <NavBar />
          <Switch>
            <Route path='/About' render={(props) => <About {...props} something={'test'} />}/>
            <Route path='/Home' component={Home} />
            {/* <Route path='/Virus' component={Virus} /> */}
          </Switch >
        </Container>

        <div>
        </div>
      </div>
    );
  }
}
