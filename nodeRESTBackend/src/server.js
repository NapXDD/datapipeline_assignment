const express = require('express');
const cors = require('cors');
const latestPriceRouter = require('./routers/latestPrice');
const latestAggregateRouter = require('./routers/latestAggregate');
const coinsData = require('./routers/getCoins')
const config = require('./config.json');

const app = express();
const port = config.serverPort;

app.use(cors());
app.use(express.json());
app.use(latestPriceRouter);
app.use(latestAggregateRouter);
app.use(coinsData);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
