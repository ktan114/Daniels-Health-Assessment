import React from 'react';

const Temperature = props => {
  const { fahrenheit, temperature, convert } = props;
  return (
    <div>
      <h1>
        {temperature} {fahrenheit ? '°F' : '°C'}
      </h1>
      <button onClick={convert}>Convert to {fahrenheit ? '°C' : '°F'}</button>
    </div>
  );
};

export default Temperature;
