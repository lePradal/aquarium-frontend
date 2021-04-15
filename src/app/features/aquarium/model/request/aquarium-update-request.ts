import { IAquarium } from "../aquarium";

export class AquariumUpdateRequest {
    public name?: string;
    public description?: string;
    public imageUrl?: string;
    public volume?: number;
    public controlActive?: boolean;
    public setPointTemp?: number;
    public temperature?: number;
    public status?: string;
 
    constructor(aquarium: IAquarium) {
        this.name = aquarium.name;
        this.volume = aquarium.volume;
        this.description = aquarium.description;
        this.imageUrl = aquarium.imageUrl;
        this.controlActive = aquarium.controlActive;
        this.setPointTemp = aquarium.setPointTemp;
        this.temperature = aquarium.temperature;
        this.status = aquarium.status;
    }
}