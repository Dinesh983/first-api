

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


module.exports = {
    SuccessResponse,
    FailureResponse
}