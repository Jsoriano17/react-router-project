import React from 'react';
import NewForm from './NewForm';
import ShowVirus from './ShowVirus';

class Virus extends React.Component {
  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addVirus = (newVirus) => {
    let virus = { id: this.getId(), ...newVirus, };
    this.setState({
      viruses: [virus, ...this.state.viruses],
    });
  };

  render() {
    const { viruses } = this.state
    return (
      <div>
        {
          viruses.map(virus => (
            <ShowVirus key={virus.id} {...virus} />
          ))
        }
        <NewForm add={this.addVirus} />
      </div>
    )
  }
}

export default Virus