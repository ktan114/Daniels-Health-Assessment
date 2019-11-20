import React from 'react';

const Date = props => {
  const { day, changeDay } = props;
  return (
    <div>
      <h1>Chicago, Illinois</h1>
      <h3>November {day + 1}, 2019</h3>
      <button onClick={() => changeDay(-1)}>Previous Day</button>
      <button onClick={() => changeDay(+1)}>Next Day</button>
    </div>
  );
};

export default Date;
