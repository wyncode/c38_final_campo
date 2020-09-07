if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = require('./server/app'),
  PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Express server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
