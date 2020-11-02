import React from "react";
import Select from "react-select";
import browseCourse from "../json/browseCourse.json";
import courseList from "../json/courses.json";

const CourseSearch = () => {
  const BrowseSelect = () => {
    let new_a = [];
    browseCourse.map((per, i) => {
      new_a.push({
        value: per.name,
        label: per.name,
        state: per.state
      });
      return per;
    });
    return <Select options={new_a} onChange={(a)=>{
      window.location = `/courses/state/${a.state}`
    }}/>;
  };

  const CourseSelect = () => {
    let new_a = [];
    courseList.map((per, i) => {
      new_a.push({
        value: per.name,
        label: per.name,
      });
      return per;
    });
    return <Select options={new_a} />;
  };

  return (
    <div className="course-search">
      <div className="course-search--wrapper">
        <div className="course-search--wrapper--header">
          <div className="course-search--wrapper--header--box">
            <span className="course-search--wrapper--header--box--title">
              Browse course by us State:
            </span>
            <div className="course-search--wrapper--header--box--select">
              <BrowseSelect />
            </div>
          </div>
          <div className="course-search--wrapper--header--box">
            <span className="course-search--wrapper--header--box--title">
              International Golf Courses:
            </span>
            <div className="course-search--wrapper--header--box--select">
              <CourseSelect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
