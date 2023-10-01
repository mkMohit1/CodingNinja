// require the library
const mongoose = require('mongoose');

// connect to the database
const DB = ('mongodb+srv://mohityoga2016:BWxlkO26oZqIjxMI@cluster0.eqqqsse.mongodb.net/?retryWrites=true&w=majority');


mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// acquire the connection to check if it is successfully
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running the print the msg
db.once('open', function () {
    console.log('Successfully connected to a database');
})

