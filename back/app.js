const express = require('express');
const path = require('path');
var cors=require('cors');

const productRoutes = require('./routes/product');

const app = express();

//POSSIBILITÉ 1
app.use(cors())
//POSSIBILITÉ 2
// app.use(cors({origin:true}))

//POSSIBILITÉ 3
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//POSSIBILITÉ 4
app.use('/api/products', /*cors(), */productRoutes);

module.exports = app;
