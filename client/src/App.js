import React, { Component } from 'react';

import './App.css';
import database from './firebase';
import Date from './components/Date';
import Temperature from './components/Temperature';
import DisplayAlert from './components/DisplayAlert';

class App extends Component {
  state = {
    day: 0,
    temperatures: [],
    temperature: 46,
    fahrenheit: true,
    show: false,
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
    if ((day === 0 && value === -1) || (day === 9 && value === 1)) {
      this.handleModal()
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

  handleModal = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { temperature, fahrenheit, day, show } = this.state;
    return (
      <div className="App">
        <DisplayAlert show={show} day={day} handleModal={this.handleModal} />
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
