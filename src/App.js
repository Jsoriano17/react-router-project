import React from 'react';
import './App.css';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import About from './About'
import NavBar from './NavBar'
import { Container } from 'semantic-ui-react'
import Virus from './Virus'
import NoMatch from './NoMatch'

export default class App extends React.Component {
  state = {
    viruses: [
      { id: 1, name: 'COVID-19', about: 'boomer killer' },
      { id: 2, name: 'Ebola', about: 'A virus that causes severe bleeding, organ failure, and can lead to death.' }
    ],
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addVirus = (newVirus) => {
    let virus = { id: this.getId(), ...newVirus, };
    this.setState({
      viruses: [virus, ...this.state.viruses],
    });
  };

  deleteVirus = (id) => {
    const newViruses = this.state.viruses.filter(e=>{
      return e.id !== id
    })
    this.setState({
      viruses: newViruses
    })
  }

  render() {
    return (

      <div className="App">
        <Container>
          <NavBar />
          <Switch>

            <Route path='/About' render={(props) => <About {...props} virus={this.state.viruses} />}/>
            <Route path='/Home' render={(props) => <Home {...props} vir={this.state.viruses} />}/>
            <Route path='/Virus' render={(props) => <Virus {...props} 
                                                                      virus={this.state.viruses} 
                                                                      addVirus={this.addVirus}
                                                                      deleteVirus={this.deleteVirus} />} />
            <Route component={NoMatch} />
          </Switch >
        </Container>

        <div>
        </div>
      </div>
    );
  }
}
