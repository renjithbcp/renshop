import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice.js";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Form,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice.js";
import Rating from "../components/Ratings.jsx";
const ProductScreen = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addToCartHandler = ()=>{
   dispatch(addToCart({...product,qty}));
   navigate('/cart');
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        go back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data.message || error.err}</div>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} Reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>Price:${product.price}</ListGroupItem>
              <ListGroupItem>{product.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        $
                        {product.countInStock > 0 ? "In stock" : "Out of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (<ListGroup.Item>
                  <Row>
                    <Col>Quantity</Col>
                    <Col>
                    <Form.Control as='select'
                                  value={qty}
                                  onChange={(e)=>setQty(Number(e.target.value))}>
                                 {[...Array(product.countInStock).keys()].map((x)=>(
                                  <option key={x + 1} value={x + 1}>
                                   {x + 1}
                                  </option>
                                 ))} 

                    </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>)}
                <ListGroup.Item>
                  <Row>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      add to cart
                    </Button>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
