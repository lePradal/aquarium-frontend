import { IAquarium } from "../aquarium";

export const aquariumMock: IAquarium = {
    id: 0,
    controlActive: true,
    creationDate: new Date(Date.now()),
    name: 'Meu Aquário',
    setPointTemp: 25.0,
    status: "ONLINE",
    temperature: 26.0,
    volume: 60.0,
}

export const aquariumListMock: IAquarium[] = [
    {
        id: 0,
        controlActive: true,
        creationDate: new Date(Date.now()),
        name: 'Meu Aquário',
        setPointTemp: 25.0,
        status: "ONLINE",
        temperature: 26.0,
        volume: 60.0,
    },
    {
        id: 1,
        controlActive: true,
        creationDate: new Date(Date.now()),
        name: 'Meu Aquário 2',
        setPointTemp: 22.0,
        status: "ONLINE",
        temperature: 24.0,
        volume: 45.0,
    },
    {
        id: 3,
        controlActive: true,
        creationDate: new Date(Date.now()),
        name: 'Meu Aquário 3',
        setPointTemp: 21.5,
        status: "ONLINE",
        temperature: 22.5,
        volume: 50.0,
    },
]