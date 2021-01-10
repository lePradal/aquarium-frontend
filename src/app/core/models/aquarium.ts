export interface IAquarium {
    id?: number;
    name?: string;
    description?: string;
    imageUrl?: string;
    volume?: number;
    waterLevel?: number;
    temperature?: number;
    controlActive?: boolean;
    tempControlActive?: boolean;
    setPointTemp?: number;
    pH?: number;
    phMonitActive?: boolean;
    creationDate?: Date;
    status?: string;
}