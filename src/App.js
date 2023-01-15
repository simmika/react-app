import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./styles.css";

export default function App() {
  const [name, setName] = React.useState("");
  const [submitState, setSubmitState] = React.useState("");
  const isLowerCase = name === name.toLowerCase();
  const error = isLowerCase ? null : (
    <Row style={{ marginTop: "1rem" }}>
      <Col lg="10">
        <div class="alert alert-danger" role="alert">
          Usename must be lower case
        </div>
      </Col>
    </Row>
  );

  return (
    <div className="App">
      <Container style={{ marginTop: "4rem" }}>
        <Row>
          <Col xs lg="2">
            <Button
              disabled={Boolean(error)}
              onClick={() => setSubmitState(name)}
              variant="primary"
              type="submit"
              size="lg"
            >
              Submit
            </Button>
          </Col>
          <Col xs lg="8">
            <Form.Control
              type="name"
              placeholder="Your name"
              onChange={(event) => {
                setSubmitState("");
                setName(event.target.value);
              }}
              size="lg"
            />
          </Col>
        </Row>
        <div>{error}</div>
        {submitState !== "" && (
          <Row style={{ marginTop: "1rem" }}>
            <Col lg="10">
              <div class="alert alert-primary" role="alert">
                Hello, {submitState}
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
