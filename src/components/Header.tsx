import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default ({ logo }: { logo: string }): JSX.Element => {
  return (
    <Row className="h-25 justify-content-center">
      <Col className="text-center d-flex align-items-center justify-content-center">
        <img src={logo} alt="snowflake" width="96" />
      </Col>
    </Row>
  );
};
