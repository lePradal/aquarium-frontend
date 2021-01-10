import { IAquarium } from "../aquarium";

export class AquariumCreateRequest {
    public name?: string;
    public volume?: number;
    public description?: string;
    public imageUrl?: string;

    constructor(aquarium: IAquarium) {
        this.name = aquarium.name;
        this.volume = aquarium.volume;
        this.description = aquarium.description;
        this.imageUrl = aquarium.imageUrl;
    }
}