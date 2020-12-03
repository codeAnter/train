import React, { useState } from 'react'
import { Button, Badge, Container, Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome';
import CartItem from './CartItem';

export default ({cartNumber = 10, cartItems = []}) => {
    const [opened, setOpened]= useState(false)

    const cartItemsList = cartItems.map((item, key) => <CartItem {...item} key={key} />)
    const panelWidth = 375

    return (<div style={{position:'fixed', right: opened ? 0 : `-${panelWidth}px`, top: 0, height: '100%', width:`${panelWidth}px`, transition: 'right .5s'}} className="bg-dark text-white">
    <Button type="button" variant="dark" style={{width:'50px', height: '50px', position: 'absolute', left: '-50px', top:0, fontSize: '24px', weight: 500, lineHeight: 1, borderRadius:0}} onClick={() => setOpened(!opened)}>
        {
            !opened ? <span style={{position: 'relative'}}>
                <FontAwesome name="shopping-cart"/>
                <Badge pill variant="success" style={{position:'absolute',  fontSize: '4px', right: '-8px'}}>{cartNumber}</Badge>
                </span> : <FontAwesome name="close" />
        }
        
    </Button>
    <div className="text-center">        
        <span className="position-relative">
            <FontAwesome name="shopping-cart" size="4x"/>
            <Badge pill variant="success" style={{position:'absolute',  fontSize: '16px', right: '-16px'}}>{cartNumber}</Badge>
        </span>
    </div>
    <Container fluid style={{maxHeight:'75vh'}}>
        {cartItems.length === 0 ? 
        <div className="text-center">The cart is empty</div> 
        : cartItemsList
         }
    </Container>
    <Container className="position-absolute" style={{bottom:0}}>
    <Container>
        <Row>
            <Col>
            <div className="text-secondary">
                SUBTOTAL
            </div>
            </Col>
            <Col>
            <div className="text-primary" style={{fontSize: '32px'}}>
                $899.20
            </div>
            <div className="text-secondary">
                OR UP TO 9x$99.91
            </div>
            </Col>
        </Row>
    </Container>
    <Container>
        <Button block>Checkout</Button>
    </Container>
    </Container>
</div>)
}