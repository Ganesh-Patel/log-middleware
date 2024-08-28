// import { Router } from "express";
// const router = Router();

export const loggingMiddleware = (req, res, next) => {
    console.log("Request Successful in loggingMiddleware");
    console.log("req ip : ", req.ip);
    console.log("req method : ", req.method);
    next();
    console.log("Response Successful in loggingMiddleware");
}