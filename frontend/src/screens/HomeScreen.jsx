import Products from '../components/Products.jsx';
import products from '../products.js';
import {Row,Col} from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <>
    <div>HomeScreen</div>
    <h1>Latest products</h1>
    <Row>
       {products.map((product)=>(<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        <Products product={product}/>
       </Col>

       ))}
    </Row>
    </>
  )
}

export default HomeScreen