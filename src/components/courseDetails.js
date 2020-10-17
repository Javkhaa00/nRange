import React from "react";
import axios from "axios";

const courseDetails = (props) => {
  const url = "http://localhost:8000/state/";
  console.log(props);
  const getCourse = (state) => {
    axios
      .post(url + state, {})
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  getCourse(props.match.params.state);
  return (
    <div>
      <h1>dsadsa</h1>
    </div>
  );
};

export default courseDetails;
