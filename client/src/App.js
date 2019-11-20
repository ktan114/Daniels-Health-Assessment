import React, { Component } from 'react';

import './App.css';
import database from './firebase';

class App extends Component {
  state = {
    temperatures: [],
  };

  componentDidMount() {
    this.retrieveTemperatures();
  }

  retrieveTemperatures = async () => {
    const ref = await database
      .collection('temperature')
      .doc('chicago')
      .get();
    const temperatures = await ref.data().temperatures;
    this.setState({ temperatures: temperatures });
  };

  render() {
    const { temperatures } = this.state;
    return (
      <div>
        <h1>Chicago, Illinois</h1>
        {temperatures.map((temperature, i) => {
          return (
            <div key={i}>
              <span>{temperature}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
