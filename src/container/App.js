import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import history from '../store/history';

import JoinGameModal from '../components/Modal/JoinGameModal';
import './App.scss';

// Further refacroting needed in this file, when we add more features and add server connections.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  render() {
    return (
      <div className="landingPage wrapper">
        <Col>
          <Row md={12} className="landingpage-button">
            <Button onClick={() => history.push('/board')}>New Game</Button>
          </Row>
          <Row md={12} className="landingpage-button">
            <Button onClick={() => this.setState({ modalShow: true })}>
              Join Game
            </Button>
          </Row>
        </Col>
        <JoinGameModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </div>
    );
  }
}

export default App;
