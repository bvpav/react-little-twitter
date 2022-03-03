import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmationModal = ({ component, onConfirm }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  const handleConfirm = () => {
    onConfirm(); // TODO: maybe await?
    setShow(false);
  };

  const Component = component;
  return (
    <>
      <Component onClick={handleShow} />
      <Modal show={show} onHide={handleHide}>
        <Modal.Header>
          <Modal.Title>Изтриване на публикация?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Наистина ли искате да изтриете тази публикация?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Отказ
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Изтриване
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
