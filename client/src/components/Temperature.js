import React from 'react';
import Button from 'react-bootstrap/Button';

const Temperature = props => {
  const { fahrenheit, temperature, convert } = props;
  return (
    <div className="Temperature">
      <h1 className="Temperature__Display">
        <h1>Chicago, Illinois</h1>
        <hr />
        {temperature} {fahrenheit ? '°F' : '°C'}
        <hr />
      </h1>
      <Button size="lg" variant="primary" onClick={convert}>
        Convert to {fahrenheit ? '°C' : '°F'}
      </Button>
    </div>
  );
};

export default Temperature;
