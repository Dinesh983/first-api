const { connect } = require("mongoose");
const { Config } = require("./config");

const DbConfig = () => {
    connect(Config().MONGO_URI, { useNewUrlParser: true, })
    .then((res) => {
        console.log('DB connected...');
    }).catch(err => {
        console.log(`DB ERROR:`, err);
    })
    return;
}


module.exports = {
    DbConfig
}