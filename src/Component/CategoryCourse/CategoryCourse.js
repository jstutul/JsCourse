import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Courses from "../Courses/Courses";

const CategoryCourse = (props) => {
  let { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);
  useEffect(() => {
    fetch("https://amrapi.jstutul.xyz/apiv4/course/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  useEffect(() => {
    let newcourse = [];
    courses.forEach((x) => {
      if (parseInt(id) === x.category) {
        newcourse.push(x);
      }
    });
    setDisplayProduct(newcourse);
  }, [courses, id]);

  console.log(displayProduct);
  return (
    <>
      <div className="container">
        <div className="course-category-container my-4">
          <h3 className="text-center border-bottom border-primary py-2">
            All Courses {displayProduct.length}
          </h3>
          <div className="row gx-2 gy-4 mt-2">
            {displayProduct.length ? (
              displayProduct.map((course) => (
                <Courses key={course.id} course={course}></Courses>
              ))
            ) : (
              <div
                className="alert alert-warning d-flex align-items-center"
                role="alert"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                  viewBox="0 0 16 16"
                  role="img"
                  aria-label="Warning:"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <div className="text-dark">There is no Course added yet</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCourse;
