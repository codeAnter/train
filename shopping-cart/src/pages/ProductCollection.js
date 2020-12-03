import React from "react";
import FilterPanel from "../components/FilterPanel";
import SortPanel from "../components/SortPanel";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import productData from "../assets/products.json";
import Cart from '../components/Cart'


export default class ProductCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ["M"],
    };
  }
  handleFilter = (size, checked) => {
    let { selected } = this.state;
    if (checked) {
      this.setState({
        selected: [...selected, size],
      });
    } else {
      this.setState({
        selected: selected.filter((item) => item !== size),
      });
    }
  };
  render() {
    const { selected } = this.state;
    const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
    let cartItems = [{
      "product_id": 6,
      "size": 'M',
      "quantity": 5     
    }, {
      "product_id": 4,
      "size": 'M',
      "quantity": 1   
    }, {
      "product_id": 5,
      "size": 'L',
      "quantity": 10   
    }]
    cartItems = cartItems.map((item) => {
      item.product = productData.products.find(item2 => item2.id === item.product_id)
      return item;
    })
    console.log('cart items', cartItems)
    
    console.log("products", productData);
    return (
      <div className="mt-4 mb-4">
        <Container>
          <Row>
            <Col sm={4} md={2}>
              <FilterPanel
                sizes={sizes}
                selected={selected}
                onChange={this.handleFilter}
              />
            </Col>
            <Col sm={8} md={10}>
              <div className="mb-4">
                <Row>
                  <Col>
                  {productData.products.length } Product(s) found.
                  </Col>
                  <Col>
                    <SortPanel></SortPanel>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  {productData.products.map((item) => (
                    <Col xs={12} sm={6} md={4} className="mb-4" key={item.id}>
                      <ProductCard item={item} key={item.id} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Cart cartNumber={8} cartItems={cartItems} />
      </div>
    );
  }
}
