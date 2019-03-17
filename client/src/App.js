import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import RecipesList from './components/recipes-list-component';
import ViewRecipe from './components/view-recipe-component';
import AddRecipe from './components/add-recipe-component';

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.jpg";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logo} width="130" height="130" alt="recipes-logo" />
            </a>
            <Link to="/" className="navbar-brand">MERN Stack APP</Link>
            <div className="nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Recipes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/view/:id" className="nav-link">View Recipe</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link">Add Recipe</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={RecipesList} />
          <Route path="/view/:id" component={ViewRecipe} />
          <Route path="/add" component={AddRecipe} />
        </div>

      </Router>

    );
  }
}

export default App;
