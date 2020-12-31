export class Aquarium {
    public id?: number;
    public name?: string;
    public description?: string;
    public imageBase64?: string;
    public volume?: number;
    public waterLevel?: number;
    public temperature?: number;
    public controlActive?: boolean;
    public tempControlActive?: boolean;
    public setPointTemp?: number;
    public pH?: number;
    public phMonitActive?: boolean;
    public creationDate?: Date;
    public status?: string;
}