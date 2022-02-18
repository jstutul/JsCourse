import React, { useEffect, useState } from "react";
import "./Home.css";
import img_1 from "../../slider/slider-1.png";
import img_2 from "../../slider/slider-2.png";
import img_3 from "../../slider/slider-3.png";
import Category from "../Category/Category";
import Courses from "../Courses/Courses";
const Home = () => {
  const [category, setCategory] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://amrapi.jstutul.xyz/apiv4/category/")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  useEffect(() => {
    fetch("https://amrapi.jstutul.xyz/apiv4/course/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container">
      {courses.length ? (
        <div></div>
      ) : (
        <div className="text-center spinnerStyle">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="slider-container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img_1} className="slider-img w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img_2} className="slider-img w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img_3} className="slider-img w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="course-category-container my-4">
        <h3 className="text-center border-bottom border-primary py-2">
          Course Category List
        </h3>
        <div className="row gx-2 py-2">
          {category.map((cats) => (
            <Category key={cats.id} category={cats}></Category>
          ))}
        </div>
      </div>
      <div className="course-category-container my-4">
        <h3 className="text-center border-bottom border-primary py-2">
          Recent Courses
        </h3>
        <div className="row gx-2 py-2">
          {courses.slice(0, 3).map((courses) => (
            <Courses key={courses.id} course={courses}></Courses>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
