const errorMiddleware = (err, req, res, next) => {
    console.log('This is the error middleware');
    const statusCodee = res.statusCode ? res.statusCode : 500;
    res.statusCode(statusCodee);
    res.json({message: err.message, stack: process.env.NODE_ENV === 'development' ? err.stack : null});
}

module.exports = errorMiddleware