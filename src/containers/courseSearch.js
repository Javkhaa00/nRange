import React from 'react';
import Select from 'react-select';
import browseCourse from '../json/browseCourse.json';
import courseList from '../json/courses.json';

const CourseSearch = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const BrowseSelect = () => (
        <Select options={options} />
    )
    const CourseSelect = () => (
        <Select options={options} />
    )

    const renderList = (el) => {

        if (!el) return null;

        return (
            <span className="lists">{el.name}</span>
        )
    }

    return (
        <div className="course-search">
            <div className="course-search--wrapper">
                <div className="course-search--wrapper--header">
                    <div className="course-search--wrapper--header--box">
                        <span className="course-search--wrapper--header--box--title">
                            Browse course by us State:
                        </span>
                        <div className="course-search--wrapper--header--box--select" >
                            <BrowseSelect />
                        </div>
                    </div>
                    <div className="course-search--wrapper--header--box">
                        <span className="course-search--wrapper--header--box--title">
                            International Golf Courses:
                        </span>
                        <div className="course-search--wrapper--header--box--select" >
                            <CourseSelect />
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-search--lists">
                <div className="course-search--lists--wrapper">
                    <div className="course-search--lists--wrapper--browse">
                        <span className="course-search--lists--wrapper--title">
                            Browse course by us State:
                        </span>
                        <div className="course-search--lists--wrapper--browse--texts">
                            {browseCourse.map(renderList)}
                        </div>
                    </div>
                    {/* <div className="course-search--lists--wrapper--empty" /> */}
                    <div className="course-search--lists--wrapper--international">
                        <span className="course-search--lists--wrapper--title">
                            International Golf Courses:
                        </span>
                        <div className="course-search--lists--wrapper--international--texts">
                            {courseList.map(renderList)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSearch;