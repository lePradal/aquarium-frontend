import { IAquarium } from "../aquarium";

export class AquariumUpdateRequest {
    public name?: string;
    public description?: string;
    public imageUrl?: string;
    public volume?: number;
    public controlActive?: boolean;
    public tempControlActive?: boolean;
    public setPointTemp?: number;
    public phMonitActive?: boolean;
 
    constructor(aquarium: IAquarium) {
        this.name = aquarium.name;
        this.volume = aquarium.volume;
        this.description = aquarium.description;
        this.imageUrl = aquarium.imageUrl;
        this.controlActive = aquarium.controlActive;
        this.tempControlActive = aquarium.tempControlActive;
        this.setPointTemp = aquarium.setPointTemp;
        this.phMonitActive = aquarium.phMonitActive;
    }
}