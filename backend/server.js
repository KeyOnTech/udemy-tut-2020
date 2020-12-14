const express = require('express');
const {data} = require('./data');
// Create Express app
const app = express()
/*** this lets you call this REST server service --- START */
var cors = require('cors');
app.use( cors() );
/*** this lets you call this REST server service --- END */
// default route
app.get('/', (req, res) => {
    res.send('server is ready');
});
app.get('/api/products', (req, res) => {
    // console.log(data);
    res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    // console.log(product);
    if (product) {
        res.send(product);
    }else{
        res
            .status(404)
            .send({message: 'Product Not Found'});
    }
});
const port = process.env.PORT || 5000;
// Start the Express server
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
});
 