import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Temperature = props => {
  const { fahrenheit, temperature, convert } = props;
  const alertColor =
    temperature >= 50 && fahrenheit
      ? 'success'
      : temperature && fahrenheit >= 32
      ? 'info'
      : 'primary';
  const tip =
    temperature && fahrenheit >= 50
      ? 'Cool Day'
      : temperature && fahrenheit >= 32
      ? 'Cold Day'
      : "Seek shelter! It's too cold!";
  return (
    <div className="Temperature">
      <h1 className="Temperature__Display">
        <Alert variant={alertColor}>
          <p>
            {temperature} {fahrenheit ? '°F' : '°C'}
          </p>
          <hr />
          <p>{tip}</p>
        </Alert>
      </h1>
      <Button size="lg" variant="primary" onClick={convert}>
        Convert to {fahrenheit ? '°C' : '°F'}
      </Button>
    </div>
  );
};

export default Temperature;
