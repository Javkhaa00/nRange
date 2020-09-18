import React from 'react';
import './App.scss';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Header from './components/header';
import Footer from './components/footer';
import Info from './components/info';
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
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route exact path="/" component={Home} >
          <Home />
        </Route>
        <Route path="/courses" exact={true} component={Courses} >
          <Courses />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );

}

export default App;
