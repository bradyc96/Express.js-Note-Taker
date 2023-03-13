const express = require("express");
const app = express();
const PORT = process.env.PORT || "3001"
const fs = require("fs")
const apiRoutes = require('./controllers/apiRoutes/index.js')
const htmlRoutes = require('./controllers/htmlRoutes/index.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));