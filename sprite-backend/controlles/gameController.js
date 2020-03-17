var gameModel = require("../models/games");

const getAll = async (req, res, next) => {
    var result = await gameModel.getAll();
    console.log(result);
    res.json(result);
    // res.ks({ status: true, message: result });
};

const add = async (req, res, next) => {
    var result = await gameModel.add();
    res.send({ status: true, message: result });
};

module.exports = {
    getAll: getAll,
    add: add
}