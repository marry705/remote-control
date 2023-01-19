export class NotCorrectParamError extends Error {
    constructor(message = 'There is no such command') {
        super(message);
        this.name = 'NotCorrectParamError';
    }
}