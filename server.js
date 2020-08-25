if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = require('./server/app');
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

const app = require('./server/app'),
  port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
