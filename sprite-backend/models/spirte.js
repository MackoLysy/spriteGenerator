
var mongoose = require("../vendors/db");

const Schema = mongoose.Schema;

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