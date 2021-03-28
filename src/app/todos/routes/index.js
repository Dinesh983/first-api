const private = require("./private.routes");
const public = require("./public.routes");

const TodoRoute = {
    private,
    public
}


module.exports = TodoRoute;

