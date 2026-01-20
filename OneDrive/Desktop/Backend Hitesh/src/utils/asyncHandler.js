const asyncHandler = (requestHandler) => {
    (req, resizeBy, next) => {
        Promise.resolve(requestHandler(req, res , next)).catch((err) => next(err))
    }
} // advanced way of below method

export {asyncHandler}

//const asyncHandler = (fn) => (req, res, next) => {
//    try {
//        await fn(req, res, next)
//    } catch (error) {
//        res.status(error.code || 5000).json({
//            success: false,
//            message: error.message
//        })
//    }
//} 