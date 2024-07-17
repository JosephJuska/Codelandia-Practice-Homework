const express = require('express');

const clientConfig = require('./src/config/client-config');
const authRouter = require('./src/routes/auth-routes');
const bookRouter = require('./src/routes/book-routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/book', bookRouter);

app.listen(clientConfig.CLIENT_PORT, () => {
    console.log(`Listening on port: ${clientConfig.CLIENT_PORT}`);
})