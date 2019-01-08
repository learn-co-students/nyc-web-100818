import { withRouter } from "react-router-dom";
import React from "react";

const courses = [{ name: "js" }, { name: "ruby" }];

const Course = props => {
  console.log("In Course. Props are: ", props);
  const {
    match: {
      params: { name }
    }
  } = props;
  const course = courses.find(c => c.name === name);
  return <h1>Course name is: {course.name}</h1>;
};

const RouteAwareCourse = withRouter(Course);

export default RouteAwareCourse;
