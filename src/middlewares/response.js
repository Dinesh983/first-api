const SuccessResponse = (res, data, status) => {
    return res.status(status)
    .json({ data })
}

const FailureResponse = (res, err, status) => {
    return res.status(status)
    .json({
        error: {
            message: err
        }
    })
}


const ResponseObject = ({req, type, status, data, next}) => {
    if (type == "SUCCESS") {
        req.response = {
            data,
            status,
            type
        }
    } else {
        req.response = {
            error: {
                message: data
            },
            status,
            type
        }
    }
    console.log("calling next")
    next();
}

const Response = (req, res, next) => {
    console.log(req.response);
    if(req.response.type == "SUCCESS") {
        return res.status(req.response.status)
        .json(req.response.data)
    } else {
        return res.status(req.response.status)
        .json(req.response.error);
    }
}


module.exports = {
    SuccessResponse,
    FailureResponse,
    ResponseObject,
    Response
}