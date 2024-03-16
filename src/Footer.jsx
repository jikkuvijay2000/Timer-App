import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'

function Footer() {
  return (
    <div>

<MDBFooter bgColor='light' className='text-center text-lg-left fixed-bottom'>
      <div className='text-center text-light p-3 bg-primary' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='#'>
         Jikku Vijay
        </a>
      </div>
    </MDBFooter>

    </div>
  )
}

export default Footer