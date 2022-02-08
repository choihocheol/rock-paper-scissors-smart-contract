const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client')));

app.listen(8080, () => {
  console.log(
    'Server running on 8080 port.\nConnect to http://localhost:8080/index.html',
  );
});
