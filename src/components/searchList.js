import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchList = (props) => {
  const [result, setResult] = useState([]);
  const { search } = props.match.params;

  useEffect(() => {
    let url = "http://localhost:8000/search/" + search;
    axios
      .post(url)
      .then(function (data) {
        // handle success
        setResult(data.data);
        console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  console.log(result);

  const renderResult = (el) => {
    return (
      <a
        href={`/courses/state/${el.st}/${el.city}`}
        className="search-list--wrapper--lists--texts"
        key={el.id}
      >
        <span className="search-list--wrapper--lists--texts--name">
          {el.coursename + ", "}
        </span>
        <span>{el.city + ", "}</span>
        <span>{el.st}</span>
      </a>
    );
  };

  return (
    <div className="search-list">
      <div className="search-list--wrapper">
        <div className="search-list--wrapper--lists">
          {result.map(renderResult)}
        </div>
      </div>
    </div>
  );
};

export default SearchList;
