import mongoose, { ObjectId, Document } from 'mongoose'

export interface IRoleDoc extends Document {

    // properties
    name: string;
    description: string;
    slug: string;

    // relationships
    users: Array<Object | any>;

    // generic
    createdAt: string;
    updatedAt: string;
    _version: number;
    _id: ObjectId;
    id: ObjectId;

    // functions
    findByName(name: string): IRoleDoc;
    getRoleName(id: ObjectId): IRoleDoc;
    getAllRoles(): IRoleDoc
    getRoleUser(id: ObjectId):Promise<Array<IRoleDoc>> 

}

export interface IUserDoc extends Document{

    // define schema properties
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    phoneCode: string;
    slug: string;
    userType: string;
    savedPassword: string;
    passwordType: string;

    isSuper: boolean;
    isAdmin: boolean;
    isCurator: boolean;
    isUser: boolean;
    isActive: boolean;
    isLocked: boolean;

    loginLimit: number;

    // define relationship with the model
    roles: Array<ObjectId | any>;

    // define generic types from mongoose
    createdAt: string;
    updatedAt: string;
    _version: number;
    _id: ObjectId;
    id: ObjectId;

    // define the schema function
    getAll(): IUserDoc
    hasRole(name: string, roles: Array<ObjectId>): Promise<boolean>
    matchPassword(pass: string): Promise<boolean>
    increaseLoginLimit(): number;
    checkLockedStatus(): boolean;
    getSignedJwtToken(): any

}

export interface IResult {
    error: boolean,
    message: string,
    data: any
}

export interface IRegister {
    email: string,
    password: string,
    phoneNumber: string,
    phoneCode: string 
}

export interface ILogin {
    email: string,
    password: string
}