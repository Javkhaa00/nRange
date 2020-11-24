import React, { useEffect, useState } from "react";
import browseCourse from "../json/browseCourse.json";
import courseList from "../json/courses.json";

const CourseList = () => {
  const renderList = (el) => {
    if (!el) return null;
    return (
      <a key={el.state} href={`/courses/state/${el.state}`}>
        <span className="lists">{el.name}</span>
      </a>
    );
  };

  return (
    <div className="course-list">
      <div className="course-list--lists">
        <div className="course-list--lists--wrapper">
          <div className="course-list--lists--wrapper--browse">
            <span className="course-list--lists--wrapper--title">
              Browse course by us State:
            </span>
            <div className="course-list--lists--wrapper--browse--texts">
              {browseCourse.map(renderList)}
            </div>
          </div>
          <div className="course-list--lists--wrapper--international">
            <span className="course-list--lists--wrapper--title">
              International Golf Courses:
            </span>
            <div className="course-list--lists--wrapper--international--texts">
              {courseList.map(renderList)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
