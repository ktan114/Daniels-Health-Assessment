import React from 'react';
import Modal from 'react-bootstrap/Modal';

const DisplayAlert = props => {
  const { show, day, handleModal } = props;
  const beginning = (
    <span>You are at the beginning of the weather display!</span>
  );
  const end = <span>You are at the end of the weather display!</span>;
  return (
    <div>
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Limit Reached</Modal.Title>
        </Modal.Header>
        <Modal.Body>{day === 9 ? end : beginning}</Modal.Body>
      </Modal>
    </div>
  );
};

export default DisplayAlert;
