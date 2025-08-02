import createHttpError from "http-errors";

export function getBadRequest(message = "Bad Request") {
    return createHttpError(400, message); 
}

export function getUnauthorized(message = "Unauthorized") {
    return createHttpError(401, message); 
}

export function getAccessDenied(message = "Access Denied") {
    return createHttpError(403, message);
}

export function getNotFound(message = "Not Found") {
    return createHttpError(404, message);
}

export function getConflict(message = "Conflict") {
    return createHttpError(409, message);
}

export function getUserAlreadyExists(message = "User already exists") {
    return createHttpError(409, message);
}

export function getUnprocessableEntity(message = "Unprocessable Entity") {
    return createHttpError(422, message);
}

export function getException(message = "Internal Server Error") {
    return createHttpError(500, message);
}

