'use strict';

const app = require('express')(),
    config = require('./config/config');

require('./config/express.config')(app);
require('./config/mongoose.config')(config);

app.listen(config.dev.port, () => {
    console.log('Listening... on Port:' + config.dev.port);
});

