const functions = require("firebase-functions");


const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


const {postCredentials} = require("./apis");


app.post("/test", postCredentials );

exports.api = functions.https.onRequest(app);


