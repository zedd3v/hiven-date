import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default (): JSX.Element => {
  return (
    <Row className="h-25 justify-content-center">
      <Col className="text-center d-flex align-items-center justify-content-center flex-column">
        <h6 className="mb-2">
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </h6>
        <h6>
          Made by&nbsp;
          <a
            href="https://github.com/zedd3v"
            rel="noopener noreferrer"
            target="_blank"
            className="nounderline text-white"
          >
            github.com/zedd3v
          </a>
        </h6>
      </Col>
    </Row>
  );
};
