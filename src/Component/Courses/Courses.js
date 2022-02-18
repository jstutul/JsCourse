import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";
const Category = (props) => {
  const { id, name, details, image, price } = props.course;
  const url = `/courses/${id}`;
  return (
    <div className="col-lg-4 rounded">
      <div
        className="card shadow-sm p-3 mb-5 bg-white rounded"
        style={{ height: "25rem" }}
      >
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: 1, left: "90%" }}
        >
          ${price}
        </span>
        <div className="image-div">
          <img
            src={image}
            style={{ height: "12rem" }}
            className="card-img-top img-fluid"
            alt=""
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details.slice(0, 120)}</p>
          <Link to={url}>
            <button className="btn btn-primary btn-sm ">View Course</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
