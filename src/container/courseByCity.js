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
        arr[0].expand = true;
        console.log(arr);
        setCourses(arr);
        setDetail(arr[0].sub[0]);
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
    setDetail(per);
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
                style={{
                  paddingLeft: "12px",
                  marginBottom: "4px",
                  color: per.id === detail?.id ? "rgb(120, 188, 65)" : null,
                }}
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
          {detail && (
            <>
              <div className="courses--wrapper--details">
                <div className="courses--container">
                  <div className="courses--wrapper--details--left">
                    <div className="courses--wrapper--details--left--title">
                      {detail.coursename}
                    </div>
                    <div className="courses--wrapper--details--left--desc">
                      {detail.description}
                    </div>
                    <div className="courses--wrapper--details--left--street">
                      {detail.street}
                    </div>
                    <div className="courses--wrapper--details--left--tel">
                      {detail.phone}
                    </div>
                    <div className="courses--wrapper--details--left--fax">
                      {detail.fax}
                    </div>
                    <div className="courses--wrapper--details--left--website">
                      <a href={detail.courseUrl} target="_blank">
                        {detail.courseUrl}
                      </a>
                    </div>
                    <div className="courses--wrapper--details--left--date">
                      {detail.noDate.date.substr(0, 10)}
                    </div>
                    <div className="courses--wrapper--details--left--map">
                      <a
                        href={detail.mapUrl ? detail.mapUrl : null}
                        target="_blank"
                        className="courses--wrapper--details--left--googleURL"
                      >
                        Map
                        <img
                          src="/assets/nrange-logo-footer.png"
                          alt="nrange-logo-footer"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="courses--wrapper--details--right">
                    <div className="courses--wrapper--details--right--title">
                      Golf courses staff
                    </div>
                    <div className="courses--wrapper--details--right--designer">
                      {detail.designer}
                    </div>
                    <div className="courses--wrapper--details--right--onsite">
                      {detail.onsitegolfpro}
                    </div>
                    <div className="courses--wrapper--details--right--manager">
                      {detail.generalManager}
                    </div>
                    <div className="courses--wrapper--details--right--super">
                      {detail.superintendent}
                    </div>
                  </div>
                </div>
                <div
                  className="courses--container"
                  style={{ paddingTop: "24px", paddingBottom: "104px" }}
                >
                  <div className="courses--wrapper--details--left">
                    <div className="courses--wrapper--details--left--type">
                      {detail.type}
                    </div>
                    <div className="courses--wrapper--details--left--yearbuilt">
                      {detail.yearBuilt}
                    </div>
                    <div className="courses--wrapper--details--left--dresscode">
                      {detail.dresscode}
                    </div>
                    <div className="courses--wrapper--details--left--spikes">
                      {detail.spikes}
                    </div>
                    <div className="courses--wrapper--details--left--restaurant">
                      {detail.restaurant}
                    </div>
                    <div className="courses--wrapper--details--left--access">
                      {detail.access}
                    </div>
                  </div>
                  <div className="courses--wrapper--details--right">
                    <div className="courses--wrapper--details--right--guests">
                      {detail.guests}
                    </div>
                    <div className="courses--wrapper--details--right--rental">
                      {detail.rentalclubs}
                    </div>
                    <div className="courses--wrapper--details--right--carts">
                      {detail.carts}
                    </div>
                    <div className="courses--wrapper--details--right--cartfees">
                      {detail.cartfees}
                    </div>
                    <div className="courses--wrapper--details--right--pullcarts">
                      {detail.pullcarts}
                    </div>
                    <div className="courses--wrapper--details--right--caddies">
                      {detail.caddies}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseByCity;
