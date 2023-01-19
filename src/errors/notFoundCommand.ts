export class NotFoundCommandError extends Error {
    constructor(message = 'There is no correct commands params') {
        super(message);
        this.name = 'NotFoundCommandError';
    }
}