import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
        <td>{props.recipe.recipe_name}</td>
        <td>{props.recipe.recipe_time}</td>
        <td>{props.recipe.recipe_ingredients}</td>
        <td></td>
        <td>
            <Link to={"/edit/" + props.recipe._id}>Edit/View</Link>
        </td>
    </tr>
)

class RecipesList extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipes/')
            .then(response => {
                this.setState({ recipes: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    recipeList() {
        return this.state.recipes.map(function (currentRecipe, i) {
            return <Recipe recipe={currentRecipe} key={i} />
        })
    }

    render() {
        return (
            <div>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cooking time</th>
                            <th>Ingredients</th>
                            <th>Starred</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.recipeList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RecipesList;