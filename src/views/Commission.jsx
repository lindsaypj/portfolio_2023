import React, { useState } from 'react';

import TypingText from '../components/TypingText';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import '../styles/Commission.css';

export default function Commission() {

  const [hours, setHours] = useState(8);
  const [pay, setPay] = useState(16.66);
  const [commission, setCommission] = useState(35);
  const [vehicleCom, setVehicleCom] = useState(170);
  const [vehicleSpiff, setVehicleSpiff] = useState('');

  const getDailyCommission = () => {
    return ((100/commission) * (hours * pay)).toFixed(2);
  }

  const getVehicleTime = () => {
    const spiff = !vehicleSpiff ? 0 : Number(vehicleSpiff);
    let minutes = (((vehicleCom * (commission/100)) + spiff) / pay) * 60;
    console.log(minutes)

    const hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60);
    if (hours > 0) {
      return hours + ' hrs ' + minutes + ' min';
    }
    else {
      return minutes + ' min';
    }
  }

  const getVehicleCommission = () => {
    const spiff = !vehicleSpiff ? 0 : Number(vehicleSpiff);
    return ((vehicleCom * (commission/100)) + spiff).toFixed(2);
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

            {/* COMMISSION PERCENT */}
            <Form.Label className='mt-2 px-0 w-100' id='commissionPercent'>
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
          </Form>

          <h2 className='mt-5 0'>Hourly Commission Target</h2>

          <Form>
            {/* HOURS */}
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
          </Form>

          <h4 className='mt-2'> ${getDailyCommission() || 0}</h4>


          <h2 className='mt-5'>Vehicle Timer</h2>

          <Form>
            {/* VEHICLE COMMISSION TOTAL */}
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
                aria-label='Vehicle Commission'
                aria-describedby='vehicleCommissionLabel'
              />
              <Form.Control
                id='vehicleSpiffInput'
                value={vehicleSpiff}
                placeholder='Spiff'
                onChange={(event) => {setVehicleSpiff(event.target.value)}}
                aria-label='Vehicle Commission Spiff'
                aria-describedby='vehicleCommissionLabel'
              />
            </InputGroup>
          </Form>

          <h4 className='mt-2 fw-bold'>{getVehicleTime()}</h4>
          <h4 className='mt-2 fw-bold'>${getVehicleCommission()} earned</h4>
        </Col>
      </Row>
    </Container>
  )
}