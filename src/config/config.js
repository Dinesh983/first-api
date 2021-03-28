const { config } = require("dotenv")

const Config = () => {
    config();
    return {
        PORT: process.env.PORT,
        MONGO_URI: process.env.MONGO_URI,
    }
}

module.exports = {
    Config
}