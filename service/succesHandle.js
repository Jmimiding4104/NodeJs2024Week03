function successHandle(res, post) {
    console.log(post)
    res.send({
        status: 'true',
        data: post
    }).end();
};

module.exports = successHandle;