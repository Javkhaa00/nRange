import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

const SearchList = (props) => {
  const [result, setResult] = useState([]);
  const [pageSize, setPageSize] = useState(60);
  const [page, setPage] = useState(0);

  const decodeurl = (a, b) => {
    let url = new URL(a);
    return url.searchParams.get(b);
  };

  useEffect(() => {
    console.log(window.location.search);
    let url =
      "http://localhost:8000/search?keyword=" +
      decodeurl(window.location.href, "keyword");
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
  }, [window.location.search]);

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

  console.log(page);
  return (
    <div className="search-list">
      <div className="search-list--wrapper">
        <div className="search-list--wrapper--lists">
          {result
            .slice(page * pageSize, (page + 1) * pageSize)
            .map(renderResult)}
        </div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={(result.length - 59) / 60 + 1}
          marginPagesDisplayed={1}
          pageRangeDisplayed={7}
          onPageChange={({ selected }) => setPage(selected)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default SearchList;
