
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}


const app = require('./server/app'),
  PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`Express server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`);
});
