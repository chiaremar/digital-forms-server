# Digital Forms Nodejs Express Server

To run: runs the nodejs server on localhost:3000

$ git clone https://github.com/chiaremar/digital-forms-server.git  
$ cd digital-forms-server  
$ npm install  
$ node dist/server.js  

To build: builds the server.js in dist/server.js

$ git clone https://github.com/chiaremar/digital-forms-server.git  
$ cd digital-forms-server  
$ npm install  
$ tsc  

API   
Get: /api/skids   
returns all skids in a json array  
example: result in a Chrome browser after updating the first 3 skids  
[{"number":1,"type":"Computers","packaging":"","grossWeight":"200"},  
{"number":2,"type":"Printers","packaging":"","grossWeight":"400"},  
{"number":3,"type":"Flat TVs","packaging":"","grossWeight":"300"},  
{"number":4,"type":"","packaging":"","grossWeight":""},{"number":5,"type":"",  
"packaging":"","grossWeight":""},{"number":6,"type":"","packaging":"","grossWeight":""},  
{"number":7,"type":"","packaging":"","grossWeight":""},  
{"number":8,"type":"","packaging":"","grossWeight":""},  
{"number":9,"type":"","packaging":"","grossWeight":""},  
{"number":10,"type":"","packaging":"","grossWeight":""},  
{"number":11,"type":"","packaging":"","grossWeight":""},  
{"number":12,"type":"","packaging":"","grossWeight":""}]  

Put: /api/skids/:id  
Updates the skid at id-1 in the skids array  
example using Postman  
comand:  
url: localhost:3000/api/skids/1  
header: Content-type application/json  
body: {"number": 1, "type": "Computers", "packaging": "", "grossWeight": "200"}  

