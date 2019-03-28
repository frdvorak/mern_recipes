import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './index.css';

import RecipesList from './components/recipes-list-component';
import ViewRecipe from './components/view-recipe-component';
import UpdateRecipe from './components/update-recipe-component';
import AddRecipe from './components/add-recipe-component';

import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.jpg";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={logo} width="130" height="130" alt="recipes-logo" /> Recipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">All Recipes</Nav.Link>
                <Nav.Link href="/add">Add New Recipe</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-dark">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact component={RecipesList} />
          <Route path="/:id" exact component={ViewRecipe} />
          <Route path="/update/:id" component={UpdateRecipe} />
          <Route path="/add" component={AddRecipe} />
        </div>
      </Router>
    );
  }
}

export default App;
