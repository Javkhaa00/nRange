import React from 'react';
import Select from 'react-select'

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
                            Browse course by us State:
                        </span>
                        <div className="course-search--wrapper--header--box--select" >
                            <CourseSelect />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSearch;