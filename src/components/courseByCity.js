import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseByCity = (props) => {
  const [courses, setCourses] = useState([]);
  const [detail, setDetail] = useState(null);
  const { city, state } = props.match.params;

  useEffect(() => {
    const url = "http://localhost:8000/state/";
    console.log(city, state);
    axios
      .post(url + state, { city })
      .then((data) => {
        let new_data = {};
        data.data.map((per, i) => {
          if (i === 0 || per.clubName !== data.data[i - 1].clubName) {
            new_data[per.clubName] = { sub: [] };
          }
          if (new_data[per.clubName]) {
            new_data[per.clubName].sub.push(per);
          }
        });
        console.log(new_data);
        let arr = [];
        for (const key in new_data) {
          let per = new_data[key];
          arr.push({ ...per.sub[0], ...{ sub: per.sub } });
        }
        console.log(arr);
        setCourses(arr);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleArrow = (index) => {
    const newCourses = [...courses];
    newCourses[index].expand = !courses[index].expand;
    setCourses(newCourses);
  };

  const courseDetail = (per) => {
    console.log(per, "INSIDE COURSE DETAIL");
    setDetail(
      <div className="courses--wrapper--details">
        <div className="courses--wrapper--details--left">
          <div className="courses--wrapper--details--left--title">
            {per.coursename}
          </div>
        </div>
        <div className="courses--wrapper--details--right">
          <div className="courses--wrapper--details--right--title">
            Golf courses staff
          </div>
        </div>
      </div>
    );
  };

  const renderCourses = (el, index) => {
    const arrowClass = "arrow " + (el.expand ? "down" : "right");
    return (
      <div key={el.id}>
        <div
          className="courses--wrapper--lists--club"
          onClick={() => {
            toggleArrow(index);
          }}
        >
          <span style={{ paddingRight: 5 }}>{el.clubName}</span>
          <span className={arrowClass}></span>
        </div>
        <div
          className={
            el.expand
              ? "courses--wrapper--lists--sub"
              : "courses--wrapper--lists--sub-shrink"
          }
        >
          {el.sub.map((per) => {
            return (
              <div
                key={per.id}
                onClick={() => {
                  courseDetail(per);
                }}
                className="courses--wrapper--lists--sub-title"
                style={{ paddingLeft: "12px", marginBottom: "4px" }}
              >
                {per.coursename}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="courses">
        <div className="courses--header"></div>
        <div className="courses--wrapper">
          <div className="courses--wrapper--lists">
            {courses.map(renderCourses)}
          </div>
          {detail}
        </div>
      </div>
    </>
  );
};

export default CourseByCity;
