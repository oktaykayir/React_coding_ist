/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const Datas      = require('./data');
const http      = require('http');
var express = require('express');
var app = express();
var URL = require('url');
const hostname  = 'localhost';
const port      = 3035;

/** 
 * Start the Node Server Here...
 * 
 * The http.createServer() method creates a new server that listens at the specified port.  
 * The requestListener function (function (req, res)) is executed each time the server gets a request. 
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3030 ");
  
    res.setHeader("Access-Control-Allow-Methods", "GET");
  
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
  
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    next();
});

app.get('/data', (req, res) => {
    console.log(req.params.name);

    let unFilterData =Datas.getData();

    return res.json(unFilterData);
});
app.get('/data/:name', (req, res) => {
    console.log(req.params.name);

    let unFilterData =Datas.getData();
    let filterData = unFilterData.filter(d => d.name.startsWith(req.params.name));

    return res.json(filterData);
});
var server = app.listen(port, function () { });
