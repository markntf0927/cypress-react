import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { logout, isLoggedIn } from '../../services/auth'

function Header() {
  const history = useHistory()

  const handleLogout = () => {
    history.push('/login')
    logout()
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Homepage
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to={'/items'}>
            Items
          </Nav.Link>

          {isLoggedIn() ? (
            <Button variant="link" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Nav.Link as={Link} to={'/login'}>
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </header>
  )
}

export default memo(Header)
