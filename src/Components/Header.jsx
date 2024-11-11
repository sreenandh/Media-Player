import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand href="" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://icon-library.com/images/media-player-icon/media-player-icon-2.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Media-Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
