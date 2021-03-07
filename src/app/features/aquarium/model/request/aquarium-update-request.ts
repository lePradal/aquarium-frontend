import { IAquarium } from "../aquarium";

export class AquariumUpdateRequest {
    public name?: string;
    public description?: string;
    public imageUrl?: string;
    public volume?: number;
    public controlActive?: boolean;
    public setPointTemp?: number;
 
    constructor(aquarium: IAquarium) {
        this.name = aquarium.name;
        this.volume = aquarium.volume;
        this.description = aquarium.description;
        this.imageUrl = aquarium.imageUrl;
        this.controlActive = aquarium.controlActive;
        this.setPointTemp = aquarium.setPointTemp;
    }
}