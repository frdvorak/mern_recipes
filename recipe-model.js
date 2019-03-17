const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Recipe = new Schema({
    recipe_name: {
        type: String
    },
    recipe_time: {
        type: Number
    },
    recipe_ingredients: {
        type: String
    },
    recipe_img: {
        type: String,
        default: 'https://images.eatthismuch.com/site_media/img/37627_frida2104_672fe5ee-0881-46a4-82e0-4b5cb1f20193.png'
    },
    recipe_starred: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Recipe', Recipe);