import React from 'react';
import './App.scss';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Header from './components/header';
import Footer from './components/footer';
import Info from './components/info';
import Terms from './pages/Terms';
import courseDetails from './components/courseDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Info />
      <Header />
      <Switch>
        <Route path="/courses/state/:state" exact={true} component={courseDetails} />
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route exact path="/" component={Home} >
          <Home />
        </Route>
        <Route path="/courses" exact={true} component={Courses} >
          <Courses />
        </Route>
        <Route path="/terms" exact={true} >
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );

}

export default App;
