var gameModel = require("../models/games");

const getAll = async (req, res, next) => {
    var result = await gameModel.getAll();
    res.json(result);
};

const add = async (req, res, next) => {
    var name = req.body.gameName;
    if(!name)
    {
        res.json({ status: false, message: "Cannot Inster empty!" });
        return;
    }
    console.log(name);
    var result = await gameModel.add(name);
    res.json(result);
};

module.exports = {
    getAll: getAll,
    add: add
}