import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function joinGameModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please Etnter Server ID
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Server ID</Form.Label>
            <Form.Control type="text" placeholder="Enter server id" />
            <Form.Text className="text-muted">
              Please enter your served id provided by game master.
            </Form.Text>
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
