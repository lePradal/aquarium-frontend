export interface IUser {
    id?: number,
    name?: string,
    email?: string,
    creationDate?: Date,
}

export interface IJwtPayload {
    sub: number;
}