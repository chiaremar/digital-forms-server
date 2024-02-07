"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.json()); // Enable JSON body parsing
// used a proxy server in the angular client app instead of cors
/*
const corsOptions = {
  origin:'*'
}
const corsOptions = {
  origin: 'http://127.0.0.1:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions)); // Enable CORS
*/
var port = 3000;
var numberOfSkids = 12;
var skids = Array.from({ length: numberOfSkids }, function (_, i) { return ({
    number: i + 1,
    type: '',
    packaging: '',
    grossWeight: ''
}); });
app.get('/api/skids', function (req, res) {
    // debugger;
    res.send(skids);
    // res.json({ skids }); // Send skids array to the client
});
app.get('/', function (req, res) {
    res.send('Hello from your Digital Forms server! See my API documentation at ');
});
app.put('/api/skids/:id', function (req, res) {
    // Extract the id from the request parameters
    var id = Number(req.params.id) - 1; // subtract 1 to convert from 1-based to 0-based index
    // Extract the new data for the skid from the request body
    var newSkidData = req.body;
    // assign the newSkidqData to the skid with the id
    skids[id] = newSkidData;
    console.log('Updated skid', id, 'with', newSkidData);
    res.status(200).send({ message: 'OK' });
    // todo handle a case where the skid number is out of range
    // res.status(404).send({message: 'Skid not found'});
});
app.listen(port, function () {
    console.log("Server listening at http://localhost:".concat(port));
});
