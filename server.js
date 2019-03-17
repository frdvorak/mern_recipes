const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const recipeRoutes = express.Router();
let Recipe = require('./recipe-model');

// Middleware
app.use(cors());
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://Frank:opice12345@cluster0-yf1j5.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoURI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB connection established successfully');
})

recipeRoutes.route('/').get(function (req, res) {
    Recipe.find(function (err, recipes) {
        if (err) {
            console.log(err);
        } else {
            res.json(recipes);
        }
    });
});

recipeRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Recipe.findById(id, function (err, recipe) {
        res.json(recipe);
    });
});

recipeRoutes.route('/add').post(function (req, res) {
    let recipe = new Recipe(req.body);
    recipe.save()
        .then(recipe => {
            res.status(200).json({ 'recipe': 'recipe added succesfully' });
        })
        .catch(err => {
            res.status(400).send('Adding new recipe failed');
        });
});

recipeRoutes.route('/update/:id').post(function (req, res) {
    Recipe.findById(req.params.id, function (err, recipe) {
        if (!recipe)
            res.status(404).send('data is not found');
        else {
            recipe.recipe_name = req.body.recipe_name;
            recipe.recipe_time = req.body.recipe_time;
            recipe.recipe_ingredients = req.body.recipe_ingredients;
            recipe.recipe_img = req.body.recipe_img;
            recipe.recipe_starred = req.body.recipe_starred;
        }
        recipe.save().then(recipe => {
            res.json('Recipe updated');
        })
            .catch(err => {
                res.status(400).send('Update not possible');
            });

    })
})

app.use('/recipes', recipeRoutes);

app.listen(PORT, function () {
    console.log("Server is running on port:" + PORT);
});