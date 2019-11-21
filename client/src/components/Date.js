import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Date = props => {
  const { day, changeDay } = props;
  const createButton = value => {
    return (
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 150, hide: 150 }}
        overlay={
          <Tooltip>
            {value === 1 ? <span>Next</span> : <span>Previous</span>} Date
          </Tooltip>
        }
      >
        <Button size="lg" variant="secondary" onClick={() => changeDay(value)}>
          {value === 1 ? <span>&rarr;</span> : <span>&larr;</span>}
        </Button>
      </OverlayTrigger>
    );
  };
  const leftButton = createButton(-1);
  const rightButton = createButton(1);

  return (
    <div className="Date">
      <div className="Date__Buttons">
        {leftButton}
        <h4>November {day + 1}, 2019</h4>
        {rightButton}
      </div>
    </div>
  );
};

export default Date;
