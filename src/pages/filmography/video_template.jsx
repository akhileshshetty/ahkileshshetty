import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useViewport from "../../hooks/viewport";
import { vidDisc, vidTitle } from "../../styles/my_styles";

function VideoTemplate(props) {
  const { width } = useViewport();
  const breakpoint = 1000;
  if (width < breakpoint) {
    return <MobileVidTemplate vid={props.vid} width={width} />;
  }
  return props.left ? (
    <DesktopVidTemplateLeft vid={props.vid} />
  ) : (
    <DesktopVidTemplate vid={props.vid} />
  );
}

function MobileVidTemplate(props) {
  const mobBreakpoint = 600;
  return (
    <div>
      <br />
      <iframe
        width={props.width > 450? "402" : `calc(${props.width-20}px)`}
        height={props.width > 450? "226" : `calc(${(props.width-20)*226/402}px - 10px)`}
        src={`https://www.youtube.com/embed/${props.vid.id}`}
        title={props.vid.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <br />
      <span style={vidTitle}>{props.vid.title}</span>
      <p
        style={{
          ...vidDisc,
          ...{
            textAlign: "justify",
            width: props.width > mobBreakpoint ? mobBreakpoint : props.width,
            marginLeft: props.width > mobBreakpoint ? (props.width - mobBreakpoint) / 2 : "5vmin",
            // marginRight: props.width > mobBreakpoint ? (props.width - mobBreakpoint) / 2 : "10vmin",
            paddingRight: props.width > mobBreakpoint ? 0: "5vmin",
          },
        }}
      >
        {props.vid.disc}
      </p>
      <br />
      <br />
      <br />
    </div>
  );
}

function DesktopVidTemplate(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <span style={vidTitle}>{props.vid.title}</span>
            <p style={vidDisc}>{props.vid.disc}</p>
          </Col>
          <Col>
            <iframe
              width={props.width > 2000? "calc(402px + 0.2vmin)" : "402"}
              height={props.width > 2000? "calc((402px + 0.2vmin)*226/402)" : "226"}
              src={`https://www.youtube.com/embed/${props.vid.id}`}
              title={props.vid.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function DesktopVidTemplateLeft(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <iframe
              width={props.width > 2000? "calc(402px + 0.2vmin)" : "402"}
              height={props.width > 2000? "calc((402px + 0.2vmin)*226/402)" : "226"}
              src={`https://www.youtube.com/embed/${props.vid.id}`}
              title={props.vid.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Col>
          <Col>
            <span style={vidTitle}>{props.vid.title}</span>
            <p style={vidDisc}>{props.vid.disc}</p>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default VideoTemplate;
