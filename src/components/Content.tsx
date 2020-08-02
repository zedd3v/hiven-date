import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import Timestamps from './Timestamps';

export default (): JSX.Element => {
  const [showTimestamps, setShowTimestamps] = useState(false);
  const [date, setDate] = useState('');
  const [unix, setUnix] = useState('');
  const [iso, setIso] = useState('');

  const convertSnowflakeToTimestamps = (snowflake: string): void => {
    const time = parseInt(snowflake, 10) / 4194304 + 1562544e6;
    const timestamp = !Number.isNaN(time) ? time : '';
    const newDate = new Date(timestamp);

    if (timestamp && newDate.toString() !== 'Invalid Date') {
      setDate(new Date(newDate).toLocaleString());
      setUnix(Math.trunc(timestamp / 1000).toString());
      setIso(new Date(newDate).toISOString());
      setShowTimestamps(true);
    } else {
      setShowTimestamps(false);
    }
  };

  return (
    <Row className="h-50 align-items-center justify-content-center">
      <Col className="h-100 col-6 text-center light justify-content-center align-items-center p-5 d-flex flex-column">
        <InputGroup className="w-100 mb-4">
          <InputGroup.Prepend>
            <InputGroup.Text id="snowflake" className="light-input">
              <FontAwesomeIcon icon={faSnowflake} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Snowflake"
            className="light-input"
            onChange={(e): void => convertSnowflakeToTimestamps(e.target.value)}
          />
        </InputGroup>
        {showTimestamps ? (
          <Timestamps date={date} unix={unix} iso={iso} />
        ) : null}
      </Col>
    </Row>
  );
};
