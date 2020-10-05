import React from "react";
import browseCourse from "../json/browseCourse.json";
import courseList from "../json/courses.json";

const CourseList = () => {
  const renderList = (el) => {
    if (!el) return null;

    return <span className="lists">{el.name}</span>;
  };
  return (
    <div className="courselist">
      <div className="courselist--lists">
        <div className="courselist--lists--wrapper">
          <div className="courselist--lists--wrapper--browse">
            <span className="courselist--lists--wrapper--title">
              Browse course by us State:
            </span>
            <div className="courselist--lists--wrapper--browse--texts">
              {browseCourse.map(renderList)}
            </div>
          </div>
          <div className="courselist--lists--wrapper--international">
            <span className="courselist--lists--wrapper--title">
              International Golf Courses:
            </span>
            <div className="courselist--lists--wrapper--international--texts">
              {courseList.map(renderList)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
