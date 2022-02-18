import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
const Category = (props) => {
  const { id, name, details, image } = props.category;
  let url = `/category/${id}`;
  return (
    <Link to={url} className="col-lg-3 rounded">
    
      <div className="card" style={{ height: "22rem" }}>
        <div className="card-img">
          <img src={image} className="card-img-top img-fluid" alt="" />
        </div>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details.slice(0, 120)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Category;
