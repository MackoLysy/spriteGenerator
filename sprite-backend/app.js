var express = require('express');
var ip = require('ip');
var app = express();
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');


var spriteRouter = require('./routes/spriteRouter');

app.use(fileUpload({
    createParentPath: true
}));

app.use("/uploads",express.static(__dirname + '/uploads'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send({ status: true, message: "file uploaded!" });
});

app.use('/sprite', spriteRouter)
app.listen(3000);
console.log("App start: http://" + ip.address() + ":" + 3000);