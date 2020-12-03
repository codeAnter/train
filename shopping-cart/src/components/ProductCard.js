import React from 'react'
import {Button, Image, Card, Badge} from 'react-bootstrap'

export default ({item}) => (<Card>
    <Image fluid src={`${process.env.PUBLIC_URL}/products/${item.sku}_1.jpg`}></Image>
    <div className="text-center">{item.title}</div>
    <hr style={{width: '32px', margin: '0 auto'}}></hr>
    <div className="text-center">
     {item.currencyFormat} <span className="lead">{item.price}</span>
    </div>
    <Button block variant="primary">Add To Cart</Button>
    {item.isFreeShipping && <Badge variant="secondary" style={{position:'absolute', 'top': '8px', 'right': '8px'}}>Free Shipping</Badge>}
</Card>)

