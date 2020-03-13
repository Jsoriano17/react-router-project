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
      { id: 1, name: 'COVID-19', about: 'boomer killer', edit: false },
      { id: 2, name: 'Ebola', about: 'A virus that causes severe bleeding, organ failure, and can lead to death.', edit: false }
    ],
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  changeDesc( value, desc ) {
    for (var i in this.state.viruses) {
      if (this.state.viruse[i].value == value) {
        this.state.viruse[i].desc = desc;
         break; 
      }
    }
 }

  addVirus = (newVirus) => {
    let virus = { id: this.getId(), edit: false, ...newVirus, };
    this.setState({
      viruses: [virus, ...this.state.viruses],
    });
    console.log(this.state)
  };

  deleteVirus = (id) => {
    const newViruses = this.state.viruses.filter(e => {
      return e.id !== id
    })
    this.setState({
      viruses: newViruses
    })
  }
  editVirus = (id) => {
    const newVirus = this.state.viruses.map(v => {
      if (v.id == id) {
        return { ...v, edit: !v.edit }
      }
      return v
    })
    this.setState({
      viruses: newVirus
    })
    console.log(this.state.viruses)
  }
  addEditVirus = (newVirus) => {
    // let jk= this.state.viruses.map(e => (
    //   e.id
    // ))
    // let test = this.state.viruses.map(e => {
    //   if (e.id == jk ) {
    //     return { ...e, name: newVirus.name, about: newVirus.about }
    //   }
    //   return e
    // })
    // this.setState({
    //   viruses: newVirus
    // })
    console.log('test')
  };
  render() {
    return (

      <div className="App">
        <Container>
          <NavBar />
          <Switch>

            <Route path='/About' render={(props) => <About {...props} virus={this.state.viruses} />} />
            <Route path='/Home' render={(props) => <Home {...props} vir={this.state.viruses} />} />
            <Route path='/Virus' render={(props) => <Virus {...props}
              virus={this.state.viruses}
              addVirus={this.addVirus}
              deleteVirus={this.deleteVirus}
              editVirus={this.editVirus}
              addEditVirus={this.addEditVirus}
            />}
            />
            <Route component={NoMatch} />
          </Switch >
        </Container>

        <div>
        </div>
      </div>
    );
  }
}
