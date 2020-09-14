import React from 'react';
import './App.scss';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Product from './pages/Product';
import Stats from './pages/Stats';
import Header from './containers/header';
import Footer from './containers/footer';
import Info from './containers/info';
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
        <Route path="/">
          <Home />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route >
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
