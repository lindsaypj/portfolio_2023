import React, { useState } from 'react';

import TypingText from '../components/TypingText';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

export default function Commission() {

  const [hours, setHours] = useState(8);
  const [pay, setPay] = useState(16.66);
  const [commission, setCommission] = useState(35);
  const [vehicleCom, setVehicleCom] = useState(170);

  const getDailyCommission = () => {
    return ((100/commission) * (hours * pay));
  }

  const getVehicleTime = () => {
    let minutes = ((vehicleCom * (commission/100)) / pay) * 60;

    const hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60);
    if (hours > 0) {
      return hours + " hrs " + minutes + " min";
    }
    else {
      return minutes + " min";
    }
  }
  

  return (
    <Container fluid className='commission-container p-0 mb-5'>
      <Row>
        <Col  className='p-0'>
          <h1 className='route-header padding-margins bg-black'>
            <TypingText text='Commission Calculator' />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='mt-5 ps-2'>Inputs</h2>
          <Form>
            {/* HOURS */}
            <Form.Group as={Row} className="mb-3" controlId="hoursInput">
              <Form.Label column sm="3">
                Hours Worked
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  id='hoursInput'
                  value={hours}
                  onChange={(event) => {setHours(event.target.value)}}
                  aria-label="Hours"
                />
              </Col>
            </Form.Group>

            {/* PAY */}
            <Form.Group as={Row} className="mb-3" controlId="payInput">
              <Form.Label column sm="3">
                Pay
              </Form.Label>
              <Col sm="8">
                <InputGroup>
                  <InputGroup.Text id='Pay'>
                    $
                  </InputGroup.Text>
                  <Form.Control
                    id='payInput'
                    value={pay}
                    onChange={(event) => {setPay(event.target.value)}}
                    aria-label="Hourly Pay"
                    aria-describedby='Pay'
                  />
                </InputGroup>
              </Col>
            </Form.Group>

            {/* COMMISSION PERCENT */}
            <Form.Group as={Row} className="mb-3" controlId="commissionInput">
              <Form.Label column sm="3">
                Commission Rate
              </Form.Label>
              <Col sm="8">
                <InputGroup>
                  <Form.Control
                    id='commissionInput'
                    value={commission}
                    onChange={(event) => {setCommission(event.target.value)}}
                    aria-label="Commission Percent"
                    aria-describedby='commissionPercent'
                  />
                  <InputGroup.Text id='commissionPercent'>
                    %
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Form.Group>
          </Form>

          <h2 className='mt-5 ps-2'>Daily Commission Requirment</h2>

          <p className='ps-2'>
            If I work for 
            <span className='fw-bold'> {hours || 0} </span>
            hours, I need to earn
          </p>
          <p className='ps-2'>
            <span className='fw-bold'> ${getDailyCommission() || 0} </span>
            in commission.
          </p>


          <h2 className='mt-5 ps-2'>Hours Per Vehicle</h2>

          <Form>
            {/* VEHICLE COMMISSION TOTAL */}
            <Form.Group as={Row} className="mb-3" controlId="vehicleInput">
              <Form.Label column sm="3">
                Vehicle Commission
              </Form.Label>
              <Col sm="8">
                <InputGroup>
                  <InputGroup.Text>
                    $
                  </InputGroup.Text>
                  <Form.Control
                    id='vehicleInput'
                    value={vehicleCom}
                    onChange={(event) => {setVehicleCom(event.target.value)}}
                    aria-label="Vehicle Commission Total"
                  />
                </InputGroup>
              </Col>
            </Form.Group>
          </Form>

          <p className='ps-2'>
            If I work on a
            <span className='fw-bold'> ${vehicleCom || 0} </span>
            vehicle longer than
          </p>
          <p className='ps-2'>
            <span className='fw-bold'> {getVehicleTime()}, </span>
            I will go into subsidy.
          </p>
        </Col>
      </Row>
    </Container>
  )
}