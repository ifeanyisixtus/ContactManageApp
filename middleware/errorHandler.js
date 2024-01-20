const { constant } = require("../constant");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constant.VALIDATION_ERROR:
      res.json({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constant.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constant.UNAUTHORIZE:
      res.json({
        title: "unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constant.FORBBIDEN:
      res.json({
        title: "forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constant.SERVER_ERROR:
      res.json({
        title: "server_error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      console.log("No Error All is good");
      break;
  }
};

module.exports = errorHandler;
