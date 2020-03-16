
const mongoose = require('mongoose');


const Schema = mongoose.Schema;


mongoose.connect("mongodb://127.0.0.1:27017/test", { useNewUrlParser: true });



const spriteSchema = new Schema({
    name: { type: String, required: true },
    path: { type: String, required: true },
    created: { type: Date, default: Date.now },
});

const models = {};
models.sprites = mongoose.model('sprites', spriteSchema);

const getAllSprites = function (gameId) {

};

module.exports = models.sprites;