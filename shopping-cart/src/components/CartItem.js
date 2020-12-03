import React from 'react'
import FontAwesome from 'react-fontawesome';
import { Row, Col, Image, ButtonGroup, Button, Container} from 'react-bootstrap'

export default ({product, size, quantity}) => (
        <Row noGutters className="mb-1">
        <Col xs={2}>
            <Image fluid src={`${process.env.PUBLIC_URL}/products/${product.sku}_1.jpg`}  />
        </Col>
        <Col xs={8} className="p-1 ">
            <div>{product.title}</div>
            <div className="text-secondary">{size} | {product.style}</div>
            <div className="text-info">Quantity: {quantity} </div>
        </Col>
        <Col xs={2}>
            <div class="d-flex flex-row justify-content-end">
               <Button size="sm" variant="link" className="text-danger">
                    <FontAwesome name="close" />
                </Button>
            </div>
            <div className="text-info">
            {product.currencyFormat} <span className="lead">{product.price}</span>
            </div>
            <div>
                <ButtonGroup size="sm">
                    <Button variant="info">-</Button>
                    <Button variant="info">+</Button>
                </ButtonGroup>
            </div>
        </Col>
    </Row>
)