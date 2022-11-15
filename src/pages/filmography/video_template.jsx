import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

function VideoTemplate () {

    return (
      <div>
        <Container>
        <Row>
          <Col >
            <h1>Title</h1>
            <p>
              Atul, a 26 year old, who recently broke up finds it increasingly
              hard to be alone. This creates problems in his life and his
              closest friend Saksham's life. the situation deteriorates until he
              is forced to acknowledge and accept his condition.
            </p>
          </Col>
          <Col>
            <iframe
              width="402"
              height="226"
              src="https://www.youtube.com/embed/VdRhDjh560s"
              title="Chudakaran - A docu-short"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Col>
        </Row>
        </Container>
      </div>
    );
}

export default VideoTemplate;
