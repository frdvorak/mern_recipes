import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.css";


class RecipesList extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [] };

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
    handleStarClick = (currentRecipe) => {
        console.log('aaa')
    }
    recipeList() {
        console.log(this);
        return this.state.recipes.map(function (currentRecipe, i) {
            return (
                <tr key={i}>
                    <td>{currentRecipe.recipe_name}</td>
                    <td>View</td>
                    <td className="text-center">{currentRecipe.recipe_time + ' min'}</td>
                    <td>{currentRecipe.recipe_ingredients}</td>
                    <td onClick={() => this.handleStarClick()}>
                        {currentRecipe.recipe_starred ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}
                    </td>
                    <td>
                        <Link to={"/update/" + currentRecipe._id}>Update</Link>
                    </td>
                    <td>Delete</td>
                </tr>
            )
        }, this)
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