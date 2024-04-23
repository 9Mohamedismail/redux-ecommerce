import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (itemID) => {
    dispatch(remove(itemID));
  };

  const cartCards = productCart.map((item) => (
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
            <Button variant="danger" onClick={() => removeFromCart(item.id)}>
              Remove from cart
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">{cartCards}</div>
    </>
  );
}

export default Cart;
