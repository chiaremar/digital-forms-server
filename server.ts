import express from 'express';
// import cors from 'cors';
import { Request, Response } from 'express';

const app = express();
app.use(express.json()); // Enable JSON body parsing
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

const port = 3000;
import { Skid } from 'take2-digital-forms-data-model'

const numberOfSkids = 12; 
const skids: Skid[] = Array.from({length: numberOfSkids}, (_, i) => ({
  number: i + 1, 
  type: '',
  packaging: '',
  grossWeight: ''
}));

app.get('/api/skids', (req: Request, res: Response) => {
  // debugger;
  res.send(skids);
 // res.json({ skids }); // Send skids array to the client

});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from your Digital Forms server! See my API documentation at ');
});

app.put('/api/skids/:id', (req: Request, res: Response) => {
  // Extract the id from the request parameters
  let id = Number(req.params.id) - 1; // subtract 1 to convert from 1-based to 0-based index

  // Extract the new data for the skid from the request body
  let newSkidData = req.body;

  // assign the newSkidqData to the skid with the id
  skids[id] = newSkidData;
  
  console.log('Updated skid', id, 'with', newSkidData);
  // todo should this status be 204, no content?
  res.status(200).send({message: 'OK'});

  // todo handle a case where the skid number is out of range
  // res.status(404).send({message: 'Skid not found'});
  
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});