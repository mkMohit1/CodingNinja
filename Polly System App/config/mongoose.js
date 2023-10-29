const mongoose = require('mongoose');
const DB = ("mongodb+srv://mohityoga2016:FSSUsdQpoKpJIFlv@cluster0.vufscyz.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind("error to connecting database"));

db.once('open', () => {
    console.log("Successfull connected to Database");
})


module.exports = db;