var mongoose = require("../vendors/db");

const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
});

const models = {};
models.games = mongoose.model('games', gamesSchema);

const getAll = async function () {
    var result;
    try {
        var games = await models.games.find({});
        result = games;
    } catch (error) {
        result = error;
    }
    return result;
};

const add = async function () {
    var result;
    try {
        result = await models.games.create({
            name: "Lava Link"
        });
    } catch (error) {
        result = error;
    }
    return result;
}

module.exports = {
    model: models.games,
    getAll: getAll,
    add: add
};