import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Footer from "./container/footer";
import Info from "./container/info";
import searchList from "./container/searchList";
import Terms from "./pages/Terms";
import CitiesByState from "./container/citiesByState";
import CourseByCity from "./container/courseByCity";
import Toolbar from "./container/toolbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Info />
      <Toolbar />
      <Switch>
        <Route path="/search" exact={true} component={searchList} />
        <Route
          path="/courses/state/:state/:city"
          exact={true}
          component={CourseByCity}
        />
        <Route
          path="/courses/state/:state"
          exact={true}
          component={CitiesByState}
        />
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/courses" exact={true} component={Courses}>
          <Courses />
        </Route>
        <Route path="/terms" exact={true}>
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
