import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCourse = (props) => {
  let { id } = useParams();
  const [singleCourse, setSingleCourse] = useState([]);
  useEffect(() => {
    const url = `https://amrapi.jstutul.xyz/apiv4/course/${id}/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleCourse(data));
  }, [id]);
  return (
    <div className="container">
      {singleCourse.name ? (
        <div></div>
      ) : (
        <div className="text-center spinnerStyle">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="row gx-1 my-4">
        <div className="col-lg-6 p-2">
          <img src={singleCourse.image} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 p-2">
          <h3>Course Name : {singleCourse.name}</h3>
          <h4>Price : ${singleCourse.price}</h4>
          <p>{singleCourse.details}</p>
          <button
            className="btn btn-primary"
            onClick={() => props.handleAddToCart(singleCourse)}
          >
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
