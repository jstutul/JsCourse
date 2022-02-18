import React from "react";
import { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
const AllCourse = () => {
  const [courses, setCourses] = useState([]);
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
      <div className="course-category-container my-4">
        <h3 className="text-center border-bottom border-primary py-2">
          All Courses {courses.length}
        </h3>
        <div className="row gx-2 gy-4 mt-2">
          {courses.map((courses) => (
            <Courses key={courses.id} course={courses}></Courses>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourse;
