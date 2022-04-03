const {getUsers} = require("./users");
const app = require('express')();
const port = 3000;

app.get('/', (req, res) => {
  res.json(getUsers());
});

app.listen(port, () => {
  console.log(`Ready on port ${port}`);
});
