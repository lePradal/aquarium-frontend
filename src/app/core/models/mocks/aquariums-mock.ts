import { Aquarium } from "../aquarium";

export const aquariumMock: Aquarium = {
    id: 0,
    controlActive: true,
    creationDate: new Date(Date.now()),
    name: 'Meu Aquário',
    pH: 7.0,
    phMonitActive: true,
    setPointTemp: 25.0,
    status: "ONLINE",
    tempControlActive: true,
    temperature: 26.0,
    volume: 60.0,
    waterLevel: 0.95,
}

export const aquariumListMock: Aquarium[] = [
    {
        id: 0,
        controlActive: true,
        creationDate: new Date(Date.now()),
        name: 'Meu Aquário',
        pH: 7.0,
        phMonitActive: true,
        setPointTemp: 25.0,
        status: "ONLINE",
        tempControlActive: true,
        temperature: 26.0,
        volume: 60.0,
        waterLevel: 0.95,
    },
    {
        id: 1,
        controlActive: true,
        creationDate: new Date(Date.now()),
        name: 'Meu Aquário 2',
        pH: 8.0,
        phMonitActive: true,
        setPointTemp: 22.0,
        status: "ONLINE",
        tempControlActive: true,
        temperature: 24.0,
        volume: 45.0,
        waterLevel: 0.92,
    },
    {
        id: 3,
        controlActive: true,
        creationDate: new Date(Date.now()),
        name: 'Meu Aquário 3',
        pH: 7.3,
        phMonitActive: true,
        setPointTemp: 21.5,
        status: "ONLINE",
        tempControlActive: true,
        temperature: 22.5,
        volume: 50.0,
        waterLevel: 0.94,
    },
]