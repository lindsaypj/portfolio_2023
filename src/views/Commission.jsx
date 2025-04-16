import React, { useState } from 'react';

import TypingText from '../components/TypingText';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import '../styles/Commission.css';

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
      return hours + ' hrs ' + minutes + ' min';
    }
    else {
      return minutes + ' min';
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
        <Col className='padding-margins form-col'>
          <h2 className='mt-5'>Compensation</h2>
          <Form>
            {/* PAY */}
            <Form.Group className='mb-3' controlId='payInput'>
              <Form.Label className='px-0 w-100' id='payLabel'>
                Pay
              </Form.Label>
                <InputGroup className='p-0'>
                  <InputGroup.Text>
                    $
                  </InputGroup.Text>
                  <Form.Control
                    id='payInput'
                    value={pay}
                    onChange={(event) => {setPay(event.target.value)}}
                    aria-label='Hourly Pay'
                    aria-describedby='payLabel'
                  />
                </InputGroup>
            </Form.Group>

            {/* COMMISSION PERCENT */}
            <Form.Group className='mb-3' controlId='commissionInput'>
              <Form.Label className='px-0 w-100' id='commissionPercent'>
                Commission Rate
              </Form.Label>
                <InputGroup className='px-0'>
                  <Form.Control
                    id='commissionInput'
                    value={commission}
                    onChange={(event) => {setCommission(event.target.value)}}
                    aria-label='Commission Percent'
                    aria-describedby='commissionPercent'
                  />
                  <InputGroup.Text>
                    %
                  </InputGroup.Text>
                </InputGroup>
            </Form.Group>
          </Form>

          <h2 className='mt-5 0'>Hourly Commission Target</h2>

          <Form>
            {/* HOURS */}
            <Form.Group className='mb-3' controlId='hoursInput'>
              <Form.Label className='px-0 w-100' id='hoursWorkedLabel'>
                Hours Worked
              </Form.Label>
              <Form.Control
                id='hoursInput'
                value={hours}
                onChange={(event) => {setHours(event.target.value)}}
                aria-label='Hours'
                aria-describedby='hoursWorkedLabel'
              />
            </Form.Group>
          </Form>

          <p className='m-0'>
            If I work for 
            <span className='fw-bold'> {hours || 0} </span>
            hours, I need to earn
          </p>
          <p>
            <span className='fw-bold'> ${getDailyCommission() || 0} </span>
            in commission.
          </p>


          <h2 className='mt-5'>Vehicle Timer</h2>

          <Form>
            {/* VEHICLE COMMISSION TOTAL */}
            <Form.Group className='mb-3' controlId='vehicleInput'>
              <Form.Label className='px-0 w-100' id='vehicleCommissionLabel'>
                Vehicle Commission
              </Form.Label>
                <InputGroup className='px-0'>
                  <InputGroup.Text>
                    $
                  </InputGroup.Text>
                  <Form.Control
                    id='vehicleInput'
                    value={vehicleCom}
                    onChange={(event) => {setVehicleCom(event.target.value)}}
                    aria-label='Vehicle Commission Total'
                    aria-describedby='vehicleCommissionLabel'
                  />
                </InputGroup>
            </Form.Group>
          </Form>

          <p className='m-0'>
            If I work on a
            <span className='fw-bold'> ${vehicleCom || 0} </span>
            vehicle longer than
          </p>
          <p>
            <span className='fw-bold'> {getVehicleTime()}, </span>
            I will go into subsidy.
          </p>
        </Col>
      </Row>
    </Container>
  )
}