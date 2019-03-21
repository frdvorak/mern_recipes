import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class AddRecipe extends Component {
    constructor(props) {
        super(props);

        this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
        this.onChangeRecipeTime = this.onChangeRecipeTime.bind(this);
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this);
        this.onChangeRecipeImg = this.onChangeRecipeImg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            recipe_name: '',
            recipe_time: '',
            recipe_ingredients: '',
            recipe_img: '',
            recipe_starred: false
        }
    }
    onChangeRecipeName(e) {
        this.setState({
            recipe_name: e.target.value
        });
    }
    onChangeRecipeTime(e) {
        this.setState({
            recipe_time: e.target.value
        });
    }
    onChangeRecipeIngredients(e) {
        this.setState({
            recipe_ingredients: e.target.value
        });
    }
    onChangeRecipeImg(e) {
        this.setState({
            recipe_img: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Recipe name: ${this.state.recipe_name}`);
        console.log(`Recipe time: ${this.state.recipe_time}`);
        console.log(`Recipe ingredients: ${this.state.recipe_ingredients}`);
        console.log(`Recipe image URL: ${this.state.recipe_img}`);
        console.log(`Recipe starred: ${this.state.recipe_starred}`);

        const newRecipe = {
            recipe_name: this.state.recipe_name,
            recipe_time: this.state.recipe_time,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_img: this.state.recipe_img,
            recipe_starred: this.state.recipe_starred
        }

        axios.post('http://localhost:4000/recipes/add', newRecipe)
            .then(res => console.log(res.date));

        this.setState = {
            recipe_name: '',
            recipe_time: '',
            recipe_ingredients: '',
            recipe_img: '',
            recipe_starred: false
        }
    }
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Add New Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.recipe_description}
                            onChange={this.onChangeRecipeName}
                            placeholder='Falafel'
                        />
                    </div>
                    <div className="form-group">
                        <label>Cooking time (min)</label>
                        <input type="number"
                            className="form-control"
                            value={this.state.recipe_time}
                            onChange={this.onChangeRecipeTime}
                            placeholder='10'
                        />
                    </div>
                    <div className="form-group">
                        <label>Ingredients</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.recipe_ingredients}
                            onChange={this.onChangeRecipeIngredients}
                            placeholder='chickpeas, garlic, parsley, cumin ...'
                        />
                    </div>
                    <div className="form-group">
                        <label>Image URL</label>
                        <input type="String"
                            className="form-control"
                            value={this.state.recipe_img}
                            onChange={this.onChangeRecipeImg}
                            placeholder='https://images.eatthismuch.com/site_media/img/37627_frida2104_672fe5ee-0881-46a4-82e0-4b5cb1f20193.png'
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Recipe" className="btn btn-dark" />
                        <Button className="btn-dark float-right" href="/">Go Back</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddRecipe;