import {useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import{Row,Col,Image,ListGroup,Card,Button, ListGroupItem} from 'react-bootstrap';
import Rating from '../components/Ratings.jsx';
const ProductScreen = () => {
    
   const [product , setProduct] = useState({});
   const { id :productId } = useParams();
   useEffect(() => {
     const fetchProduct = async()=>{
      const {data} = await axios.get(`/api/products/${productId}`);
      setProduct(data);
      console.log("first",data);
     }
     fetchProduct();
   }, [productId])
   
   
    
  return (
    <>
    <Link className='btn btn-light my-3' to='/'>go back</Link>
   <Row>
    <Col md={5}>
      <Image src={product.image} alt={product.name} fluid/>
    </Col>
    <Col md={4}>
      <ListGroup variant='flush'>
        <ListGroupItem>
          <h3>
            {product.name}
          </h3>
        </ListGroupItem>
       <ListGroupItem>
        <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
       </ListGroupItem>
       <ListGroupItem>
        Price:${product.price}
       </ListGroupItem>
       <ListGroupItem>
        {product.description}
       </ListGroupItem>
      </ListGroup>
    </Col>
    <Col md={3}>
      <Card>
        <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col>Price:
            </Col>
            <Col>
            <strong>${product.price }</strong>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Status:
            </Col>
            <Col>
            <strong>${product.countInStock > 0 ? 'In stock':'Out of Stock' }</strong>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Button className='btn-block'
            type='button'
            disabled={product.countInStock===0}>
              add to cart
              </Button>
          </Row>
        </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
   </Row>
    </>
  )
}

export default ProductScreen