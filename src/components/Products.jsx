import React from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <h1 style={{ textAlign: "center" }}>
        Something went wrong! Try again later
      </h1>
    );
  }

  const addToCart = (item) => {
    dispatch(add(item));
  };

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
            <Button variant="primary" onClick={() => addToCart(item)}>
              Add to cart
            </Button>
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
