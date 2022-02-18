import React from "react";

const Item = (props) => {
  const { id, name, image, quantity, price } = props.item;
  return (
    <div className="row border-top border-bottom p-2">
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <div className="col">
          <div className="row">
            <h6>{name}</h6>
          </div>
        </div>
        <div className="col">
          <button
            onClick={() => props.handleMinusCart(id)}
            className="btn btn-primary btn-sm"
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            onClick={() => props.handlePlusCart(id)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>{" "}
        </div>
        <div className="col">$ {quantity * price}</div>
        <div className="col">
          <button
            onClick={() => props.removeItem(id)}
            className="btn btn-warning btn-sm"
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
