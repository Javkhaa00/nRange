import React from "react";
import CourseLanding from "../container/courseLanding";
import CourseList from "../container/courseList";
import CourseSearch from "../container/courseSearch";

const Courses = () => {
  return (
    <>
      <CourseLanding />
      <CourseSearch />
      <CourseList />
    </>
  );
};

export default Courses;
