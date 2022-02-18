import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const history = useNavigate();
  const handleAddTocart = () => {
    history("/cart");
  };
  let totalCart = 0;
  for (const item of props.cartitem) {
    if (!item.quantity) {
      item.quantity = 1;
    }
    totalCart = totalCart + item.quantity;
  }
  console.log(props.cartitem);
  return (
    <>
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            JS Course
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn" onClick={handleAddTocart}>
                <div>
                  <span className="badge rounded-pill bg-danger p-2">
                    <i className="fas fa-shopping-cart"></i> {totalCart}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
