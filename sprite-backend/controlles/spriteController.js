
var spriteModel = require('../models/spirte');
var ip = require('ip');

const create = (req, res) => {

}
const upload = async (req, res, next) => {
    const files = req.files;
    if (!files) {
        res.send({ status: false, message: "no file uploaded!" });
    } else {
        for (const [key, value] of Object.entries(files)) {
            let file = req.files[key];
            file.mv("./uploads/" + file.name);
            try {
                await spriteModel.create({ name: file.name.split('.')[0], path: generateLink(file.name) });
            } catch (error) {
                res.send({ status: false, message: error.message });
                return;
            }
            res.send({ status: true, message: "file " + file.name + " uploaded!" });
        }
    }
}




function generateLink(filename) {
    var name = "http://" + ip.address() + ":" + 3000 + "/uploads/" + filename;
    return name;
}

module.exports = {
    create: create,
    upload: upload
}