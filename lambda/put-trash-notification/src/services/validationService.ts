import { LambdaRequestType } from "../types/LambdaType";

export const validateInput = (input: LambdaRequestType): boolean => {
    return input.accessKey === process.env.ACCESS_KEY;
}