import React from "react";

const CourseLanding = () => {
    return (
        <div className="course-landing">
            <div className="course-landing--background">
                <img src="/assets/background.png" alt="background" />
            </div>
            <span className="course-landing--title"></span>
            <div className="course-landing--pseudo">
                <span className="course-landing--courses">Courses</span>
                <span className="course-landing--worldwide">Worldwide</span>
            </div>
        </div>
    );
};

export default CourseLanding;