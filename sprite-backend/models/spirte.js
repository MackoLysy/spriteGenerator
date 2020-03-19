
var mongoose = require("../vendors/db");


const Schema = mongoose.Schema;

const spriteSchema = new Schema({
    type: { type: String, required: true },
    gameId: { type: String, required: true },
    name: { type: String, required: true },
    path: { type: String, required: true },
    created: { type: Date, default: Date.now },
});

const models = {};
models.sprites = mongoose.model('sprites', spriteSchema);

const add = async function (item) {
    console.log(item);
    var result;
    try {
        result = await models.sprites.create({
            type: item.type,
            gameId: item.gameId,
            name: item.name,
            path: item.path
        });
    } catch (error) {
        result = error;

    }

    return result;
}


module.exports = {
    model: models.sprites,
    add: add
}