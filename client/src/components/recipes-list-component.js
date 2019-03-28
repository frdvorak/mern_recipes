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
    handleStarClick = (currentRecipe, i) => {
        const recipes = [...this.state.recipes];
        let obj = {
            recipe_name: this.state.recipes[i].recipe_name,
            recipe_time: this.state.recipes[i].recipe_time,
            recipe_ingredients: this.state.recipes[i].recipe_ingredients,
            recipe_img: this.state.recipes[i].recipe_img,
            recipe_starred: this.state.recipes[i].recipe_starred
        };

        obj.recipe_starred = !obj.recipe_starred;
        recipes[i] = obj;
        console.log(recipes);
        this.setState({ recipes: recipes });
        axios.post('http://localhost:4000/recipes/update/' + this.state.recipes[i]._id, obj)
            .then(res => console.log(res.data));
    }

    viewMainIngredients = (currentRecipe) => {
        let ingredients = currentRecipe.recipe_ingredients;
        return ingredients.split(/\s*,/).slice(0, 2).join(', ').toLowerCase() + ' ...'
    }
    recipeList() {
        return this.state.recipes.map(function (currentRecipe, i) {
            return (
                <tr key={i}>
                    <td>{currentRecipe.recipe_name}</td>
                    <td><Link to={"/" + currentRecipe._id}>View</Link></td>
                    <td className="text-center">{currentRecipe.recipe_time + ' min'}</td>
                    <td>{this.viewMainIngredients(currentRecipe)}</td>
                    <td onClick={() => this.handleStarClick(currentRecipe, i)}>
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