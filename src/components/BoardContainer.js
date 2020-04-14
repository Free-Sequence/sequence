import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { selectCard } from '../actions/cardAction';

function BoardContainer(props) {
  return (
    <Container>
      <Row md={12}>
        {props.cards.map((card) => (
          <Col>
            <button type="button" onClick={() => props.selectCard(card)}>
              <img
                src={card.image}
                alt={card.name}
                height="100px"
                width="60px"
              />
            </button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

BoardContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  selectCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cards: state.sequence.allCards,
});

const mapDispatchToProps = {
  selectCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
