import React, { Component } from 'react';

import './App.css';
import database from './firebase';
import Date from './components/Date';
import Temperature from './components/Temperature';

class App extends Component {
  state = {
    day: 0,
    temperatures: [],
    temperature: 0,
    fahrenheit: true,
  };

  componentDidMount() {
    this.retrieveTemperatures();
  }

  /*
    Retrieves and sets the temperatures stored
    in the Firestore and the temperature of the
    initial day
  */
  retrieveTemperatures = async () => {
    const { day } = this.state;
    const ref = await database
      .collection('temperature')
      .doc('chicago')
      .get();
    const { temperatures } = await ref.data();
    this.setState({
      temperatures: temperatures,
      temperature: temperatures[day],
    });
  };

  /*
    Click handler for changing the day
      - Checks if it's the first or last day and 
      send an alert if it's the beginning or the 
      end of the display based on the button clicked
      - Changes the day displayed based on the button 
      clicked and resets the view to fahrenheit 
  */
  changeDay = value => {
    let { day } = this.state;
    const { temperatures } = this.state;
    if (day === 0 && value === -1) {
      alert('You are at the beginning of the weather display!');
      return;
    }
    if (day === 9 && value === 1) {
      alert('You are at the end of the weather display!');
      return;
    }
    day += value;
    let temperature = temperatures[day];
    this.setState(() => ({
      day,
      temperature,
      fahrenheit: true,
    }));
  };

  /*
    Converts the temperature based on the fahrenheit flag
  */
  convert = () => {
    let { temperature } = this.state;
    const { fahrenheit } = this.state;
    if (fahrenheit) temperature = Math.round((temperature - 32) * (5 / 9));
    else temperature = Math.round(temperature * (9 / 5) + 32);
    this.setState(prevState => ({
      fahrenheit: !prevState.fahrenheit,
      temperature: temperature,
    }));
  };

  render() {
    const { temperature, fahrenheit, day } = this.state;
    return (
      <div className="App">
        <Date day={day} changeDay={this.changeDay} />
        <Temperature
          temperature={temperature}
          fahrenheit={fahrenheit}
          convert={this.convert}
        />
      </div>
    );
  }
}

export default App;
