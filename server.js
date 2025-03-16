const app = require('./app');
const http = require('http');

const port = process.env.PORT || 8080;

app.listen(port,"0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});