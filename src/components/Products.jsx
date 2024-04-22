import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/`)
      .then((res) => setProducts(res.data));
  }, []);

  const cards = products.map((item) => (
    <div key={item.id} className="col-md-3" style={{ marginBottom: "30px" }}>
      <Card className="h-100" style={{ border: "2px solid" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={item.image}
            style={{ width: "100px", height: "130px" }}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text style={{ fontWeight: "bolder", fontSize: "25px" }}>
              ${item.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Add to cart</Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
}

export default Products;
