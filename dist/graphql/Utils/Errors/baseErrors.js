import { GraphQLError } from "graphql";
export class BaseError extends GraphQLError {
    constructor(message, code) {
        super(message, { extensions: { code, message } });
    }
}
