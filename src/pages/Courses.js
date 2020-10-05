import React from 'react';
import CourseLanding from '../components/courseLanding';
import CourseList from '../components/courseList';
import CourseSearch from '../components/courseSearch';

const Courses = () => {
    return (
        <>
            <CourseLanding />
            <CourseSearch />
            <CourseList />
        </>
    )
}

export default Courses;