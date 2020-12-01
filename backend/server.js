const express = require('express');
const {data} = require('./data');
// Create Express app
const app = express()
// default route
app.get('/', (req, res) => {
    res.send('server is ready');
});
app.get('/api/products', (req, res) => {
    console.log(data);
    res.send(data.products);
});
const port = process.env.PORT || 5000;
// Start the Express server
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
});
 