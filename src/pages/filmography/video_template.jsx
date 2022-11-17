import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useViewport from "../../hooks/viewport";

function VideoTemplate (props) {
  const {width} = useViewport();
  const breakpoint = 800; 
    return (
      <div>
        <Container>
        <Row>
          <Col >
            <h1>{props.vid.title}</h1>
            <p>
              {props.vid.disc}
            </p>
          </Col>
          <Col>
            <iframe
              width="402"
              height="226"
              src={`https://www.youtube.com/embed/${props.vid.id}`}
              // title="Chudakaran - A docu-short"
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
