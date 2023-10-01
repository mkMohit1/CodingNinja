const mongoose = require('mongoose');
const DB = ('mongodb+srv://mohityoga2016:g5xo63qMO5AuF2en@cluster0.eqqqsse.mongodb.net/?retryWrites=true&w=majority');


mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
