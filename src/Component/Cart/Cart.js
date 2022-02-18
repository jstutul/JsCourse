import "./Cart.css";
import Item from "./Item";

const Cart = (props) => {
  let totalItem = 0;
  let totalPrice = 0;
  let tax = 15;

  for (const item of props.cart) {
    totalItem = totalItem + item.quantity;
    totalPrice = totalPrice + item.price * item.quantity;
  }
  return (
    <>
      <div className="card my-4 p-4 container">
        <div className="row gx-4">
          <div className="col-md-8 p-2">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {props.cart.length} items
                </div>
              </div>
            </div>
            {props.cart.map((item) => (
              <Item
                key={item.id}
                removeItem={props.removeItem}
                item={item}
                handlePlusCart={props.handlePlusCart}
                handleMinusCart={props.handleMinusCart}
              ></Item>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary ({totalItem})</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Sub Total
                    <span>${totalPrice}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>$ {totalPrice ? tax : 0}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>${totalPrice + tax}</strong>
                    </span>
                  </li>
                </ul>

                <div className="">
                  <button
                    type="button"
                    className="float-start btn btn-primary btn-sm"
                  >
                    Go to checkout
                  </button>
                  <button
                    type="button"
                    onClick={props.handleClearCart}
                    className="btn btn-primary btn-sm float-end"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
