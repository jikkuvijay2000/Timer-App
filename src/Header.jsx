import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>

<Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn.pixabay.com/animation/2023/10/10/13/27/13-27-05-899_512.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <b className='text-white'>Automatic Counter Application</b>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header