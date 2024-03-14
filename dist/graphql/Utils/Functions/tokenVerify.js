import JWT from "jsonwebtoken";
import { BaseError } from "../Errors/baseErrors.js";
import { ErrorCodes } from "../../Types/errorTypes.js";
export const getUserFromToken = (token) => {
    if (!token)
        return null;
    try {
        return JWT.verify(token, process.env.JWT_SECRET_KEY);
    }
    catch (err) {
        throw new BaseError("Failed to validate bearer token", ErrorCodes.INVALID_CREDENTIALS);
    }
};
