const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, () => {
    
    console.log(`App listening at http://localhost:${port}`); // eslint-disable-line no-console
}); 

module.exports = app;
