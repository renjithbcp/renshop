import {Navbar,Nav,Container} from 'react-bootstrap';
import {FaShoppingCart,FaUser} from 'react-icons/fa';

import {LinkContainer} from 'react-router-bootstrap';


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>

              <LinkContainer to='/'>
           <Navbar.Brand >Proshop</Navbar.Brand>
           </LinkContainer>
           <Navbar.Toggle aria-controls='basic-navbar-nav'/>
           <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
           <Nav.Link href='/cart'><FaShoppingCart/>Cart</Nav.Link>
           </LinkContainer>
           <LinkContainer to='/login'>
           <Nav.Link href='/login'><FaUser/>Sign In</Nav.Link>
           </LinkContainer>

           <Navbar.Brand href='/'>Proshop</Navbar.Brand>
           <Navbar.Toggle aria-controls='basic-navbar-nav'/>
           <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
           <Nav.Link href='/cart'><FaShoppingCart/>Cart</Nav.Link>
           <Nav.Link href='/login'><FaUser/>Sign In</Nav.Link>

            </Nav>
           </Navbar.Collapse>
           </Container>
        </Navbar>
        </header>
  )
}

export default Header