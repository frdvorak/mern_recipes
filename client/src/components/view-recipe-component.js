import React, { Component } from 'react';
import axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.css";
import '../index.css';


class ViewRecipe extends Component {
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
            }).then(console.log(this.state));
    }
    /*
        ingredientList() {
            this.state.recipe_ingredients.map(function (ingredient, i) {
                return (
                    <li key={i}>{ingredient}</li>
                )
            })
        }*/
    render() {
        return (
            <div>
                <div className="imageDiv" style={{ width: "100%", height: "auto", backgroundImage: `url(${this.state.recipe_img})` }}></div>
                <h1>{this.state.recipe_name}</h1>
                <ul></ul>
                <button>Go back</button>
            </div >
        );
    }
}

export default ViewRecipe;