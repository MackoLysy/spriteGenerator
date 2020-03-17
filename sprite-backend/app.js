var express = require('express');
var cors = require('cors');
var ip = require('ip');
var app = express();
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');


var spriteRouter = require('./routes/spriteRouter');

var gamesRouter = require('./routes/gamesRouter');
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}));

app.use("/uploads",express.static(__dirname + '/uploads'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use('/games', gamesRouter);
app.use('/sprite', spriteRouter);

app.listen(3000);
console.log("App start: http://" + ip.address() + ":" + 3000);