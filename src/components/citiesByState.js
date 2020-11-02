import React, { useState, useEffect } from "react";
import axios from "axios";

const CitiesByState = (props) => {
  const [cities, setCities] = useState([]);
  const { state } = props.match.params;
  
  useEffect(() => {
    const url = "http://localhost:8000/cities/";
    console.log(props);
    axios
      .post(url + state, {})
      .then((data) => {
        console.log(data);
        setCities(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderCity = (el) => {
    return (
      <span className="course-detail--wrapper--cities--texts" key={el.city}>
        <a href={`/courses/state/${state}/${el.city}`}>{el.city}</a>
      </span>
    );
  };

  return (
    <>
      <div className="course-detail">
        <div className="course-detail--wrapper">
          <div className="course-detail--wrapper--cities">
            {cities.map(renderCity)}
          </div>
        </div>
      </div>
    </>
  );
};

export default CitiesByState;
