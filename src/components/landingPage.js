import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import history from '../store/history';
import JoinGameModal from './joinGameModal';

export default function LandingPage() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="landingPage wrapper">
      <Col>
        <Row md={12} style={{ justifyContent: 'center', margin: '10px' }}>
          <Button onClick={() => history.push('/board')}>New Game</Button>
        </Row>
        <Row md={12} style={{ justifyContent: 'center', margin: '10px' }}>
          <Button onClick={() => setModalShow(true)}>Join Game</Button>
        </Row>
      </Col>
      <JoinGameModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
