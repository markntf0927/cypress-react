import React, { useState, memo } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { storeUser } from '../services/auth'

function LoginForm() {
  const history = useHistory()

  const defaultFormData = {
    email: '',
    password: '',
    tel: '',
    isRemember: false,
  }

  const [formData, setFormData] = useState(defaultFormData)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleInputChange = (evt) => {
    const { name, value } = evt.target

    setFormData({ ...formData, [name]: value })
  }

  const handleClear = () => {
    setFormData(defaultFormData)
    setLoading(false)
  }

  const handleInputCheck = () => {
    const { isRemember, ...data } = formData
    const values = Object.values(data)

    for (const val of values) {
      if (!val) return false
    }

    return true
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (!handleInputCheck()) {
      console.log('invalid input')
      setError(true)
      return
    }

    setError(false)
    setLoading(true)

    console.log('api calls with', formData)

    const temp = {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      role: 'supplier',
    }

    setTimeout(() => {
      storeUser(temp.token, temp.role)

      handleClear()

      history.push('/')
    }, 3000)
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tel">
          <Form.Label>Tel No.</Form.Label>
          <Form.Control
            type="tel"
            placeholder="12345678"
            name="tel"
            value={formData.tel}
            onChange={handleInputChange}
          />

          <Form.Text className="text-muted">
            Please enter your phone number.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button
          variant="primary"
          data-cy="submit"
          type="submit"
          onClick={handleSubmit}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>

        {error && <div data-cy="error" className="p error">Please fill in all inputs</div>}
      </Form>
    </Container>
  )
}

export default memo(LoginForm)
