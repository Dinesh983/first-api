const { app } = require('./app') ;
const { Config } = require("./config/config")



app.listen(Config().PORT, () => {
    console.log(`server started at PORT:${Config().PORT}...`);
})
