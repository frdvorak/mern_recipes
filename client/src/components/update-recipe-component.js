import React, { Component } from 'react';
import axios from 'axios';

class UpdateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe_name: '',
            recipe_time: '',
            recipe_ingredients: '',
            recipe_img: '',
            recipe_starred: false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/recipes/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    recipe_name: response.data.recipe_name,
                    recipe_time: response.data.recipe_time,
                    recipe_ingredients: response.data.recipe_ingredients,
                    recipe_img: response.data.recipe_img,
                    recipe_starred: response.data.recipe_starred
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    onSubmit = () => {
        console.log('sss');
    }
    onChangeRecipeName = () => {
        console.log('sss');
    }
    onChangeRecipeTime = () => {
        console.log('sss');
    }
    onChangeRecipeIngredients = () => {
        console.log('sss');
    }
    onChangeRecipeImg = () => {
        console.log('sss');
    }
    render() {
        return (
            <div>
                <h3>Update Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="recipe_name">Name:</label>
                        <input type="text"
                            id="recipe_name"
                            className="form-control"
                            value={this.state.recipe_name}
                            onChange={this.onChangeRecipeName}
                        />
                        <label htmlFor="recipe_time">Cooking Time(min):</label>
                        <input type="number"
                            id="recipe_time"
                            className="form-control"
                            value={this.state.recipe_time}
                            onChange={this.onChangeRecipeTime}
                        />
                        <label htmlFor="recipe_ingredients">Ingredients:</label>
                        <input type="String"
                            id="recipe_ingredients"
                            className="form-control"
                            value={this.state.recipe_ingredients}
                            onChange={this.onChangeRecipeIngredients}
                        /><label htmlFor="recipe_img">Image URL:</label>
                        <input type="String"
                            id="recipe_img"
                            className="form-control"
                            value={this.state.recipe_img}
                            onChange={this.onChangeRecipeImg}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Recipe" className="btn btn-dark" />
                    </div>
                </form>
            </div>
        );
    }
}

export default UpdateRecipe;