const {connect} = require('./lib/mongo.connect')

connect().then(console.log)
.catch(console.error)
