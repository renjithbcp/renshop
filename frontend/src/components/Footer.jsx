import {Container,Row,Column, Col} from 'react-bootstrap';

const Footer = () => {
    const curentyear = new Date().getFullYear();
  return (
   <footer>
    <Container>
        <Row>
            <Col className='text-center py-3'>
                <p>proshop &copy;{curentyear}</p>
            </Col>
        </Row>
    </Container>
   </footer>
  )
}

export default Footer