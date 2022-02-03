import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import FormContainer from '../components/FormContainer'
function EmployeeSchedule() {
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('0')
    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <div>
      <Link className='bg-info' to="/"><i class="fas fa-arrow-left"></i>Go Back</Link>
      <FormContainer>
        <p className='h2'>Employee Schedule</p>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="start">
            <Form.Label>Start</Form.Label>
            <Form.Control
              type="date"
              placeholder="Start"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="end">
            <Form.Label>End</Form.Label>
            <Form.Control
              type="date"
              placeholder="End"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Schedule
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
}

export default EmployeeSchedule;
