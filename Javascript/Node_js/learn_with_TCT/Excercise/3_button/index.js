const express = require('express');
const app = express();

app.listen(3003, () => {
    console.log("listening at 3003");
});

app.use(express.static('public'));