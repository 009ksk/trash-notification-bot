export const responseService = {
    success: (message: string) => {
        return {
            statusCode: 200,
            body: message
        };
    },
    badRequest: (message: string) => {
        return {
            statusCode: 400,
            body: message
        };
    },
    error: (message: string) => {
        return {
            statusCode: 200,
            body: message
        };
    }
};
