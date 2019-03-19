import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.css";



class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [] }
    }
    handleStarredClick = () => {
        console.log('star was clicked');
    }
    render() {
        return (
            <tr>
                <td>{this.props.recipe.recipe_name}</td>
                <td>View</td>
                <td className="text-center">{this.props.recipe.recipe_time + ' min'}</td>
                <td>{this.props.recipe.recipe_ingredients}</td>
                <td onClick={this.handleStarredClick}>
                    {this.props.recipe.recipe_starred ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}
                </td>
                <td>
                    <Link to={"/update/" + this.props.recipe._id}>Update</Link>
                </td>
                <td>Delete</td>
            </tr>
        )
    }
}

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
                            <th></th>
                            <th className="text-center"><i className="far fa-clock"></i></th>
                            <th>Ingredients</th>
                            <th></th>
                            <th></th>
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