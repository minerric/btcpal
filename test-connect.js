const {connect} = require('./lib/mongo.connect')
const assert = require('assert');
connect().then(console.log)
    .then(() => assert(true))
.catch(err => {console.error(err);

assert(false)
})
