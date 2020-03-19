
var spriteModel = require('../models/spirte');
var ip = require('ip');

const add = async (req, res, next) => {
    const files = req.files;
    if (!files) {
        res.json({ status: false, message: "no file uploaded!" });
    } else {
        for (const [key, value] of Object.entries(files)) {
            let file = req.files[key];
            file.mv("./uploads/" + file.name);
            var result = await spriteModel.add({
                name: req.body.name,
                type: req.body.type,
                gameId: req.body.gameId,
                path: generateLink(file.name)
            });
            res.json({ status: true, message: result });
        }
    }
}


function generateLink(filename) {
    var name = "http://" + ip.address() + ":" + 3000 + "/uploads/" + filename;
    return name;
}



module.exports = {
    add: add
}