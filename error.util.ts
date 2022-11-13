class ErrorResponse extends Error {

    public message: string = '';
    public errors: Array<any> = [];
    public statusCode: number = 0;
    public errorStack: any;

    constructor(message: string, statusCode: number, errors: Array<any>){
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.errorStack = this.stack;

    }
}

export default ErrorResponse;