const app = require('./app');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, () => {
  console.log(`Server running on http://${host}:${port}`); //eslint-disable-line
});
