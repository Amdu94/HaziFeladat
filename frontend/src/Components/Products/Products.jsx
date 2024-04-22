import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Products.css';


const Products = ({ products }) => (
    <Container>
        <Row className="products-row">
            {products.map((product, idx) => (
                <Col sm={6} md={4} lg={3} key={idx}>
                    <Card className="product-card">
                        <Card.Img variant="top" src={product.image} className="product-img" />
                        <Card.Body>
                            <Card.Title className="product-title">{product.name}</Card.Title>
                            <Card.Text className="product-price">
                                {new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(product.price)}
                            </Card.Text>
                            <Button variant="primary" className="product-button">Tovább</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>


);

export default Products;
