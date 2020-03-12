import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  state = {
    viruses: [
      {id: 1, name: 'COVID-19', about: 'boomer killer'},
      {id: 2, name: 'Ebola', about: 'A virus that causes severe bleeding, organ failure, and can lead to death.'}
    ],
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
