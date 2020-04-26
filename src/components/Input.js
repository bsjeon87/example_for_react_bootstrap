import React from 'react'
import { Form } from 'react-bootstrap';

export const InputComponent = () => (
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
)
