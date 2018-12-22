import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  withRouter
} from "react-router-dom";
import RouteAwareCourse from "./Course";

const courses = [{ name: "js" }, { name: "ruby" }];

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Courses = () => {
  return (
    <ul>
      {courses.map(c => (
        <li key={c.name}>{c.name}</li>
      ))}
    </ul>
  );
};

const ShowCourse = props => {
  console.log(props);
  //console.log(name);
  return <RouteAwareCourse />;
};

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Route path="/" render={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/courses" render={Courses} exact />
          <Route path="/courses/:name" render={ShowCourse} exact />
        </>
      </Router>
    );
  }
}

export default App;
