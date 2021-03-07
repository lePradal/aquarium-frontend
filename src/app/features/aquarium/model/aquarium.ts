export interface IAquarium {
    id?: number;
    name?: string;
    description?: string;
    imageUrl?: string;
    volume?: number;
    temperature?: number;
    controlActive?: boolean;
    setPointTemp?: number;
    creationDate?: Date;
    status?: string;
}