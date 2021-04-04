const dotenv = require("dotenv")

const Config = () => {
    dotenv.config();
    return {
        PORT: process.env.PORT,
        MONGO_URI: process.env.MONGO_URI,
        SECRET: process.env.SECRET,
    }
}

module.exports = {
    Config
}