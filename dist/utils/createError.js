"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatusError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
const createError = (message, statusCode) => {
    const error = new StatusError(message, statusCode);
    throw error;
};
exports.default = createError;
