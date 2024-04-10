function errHandle(res) {
    res.status(400).send({
        status: 'false',
        message: 'wrong',
    }).end();
}

module.exports = errHandle;