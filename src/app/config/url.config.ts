import { environment } from "src/environments/environment";

export const urlConfig = Object.freeze({
    user: `${environment.API}/user`,
    auth: `${environment.API}/auth`,
    aquarium: `${environment.API}/aquariums`,

    // user: `/back-host/user`,
    // auth: `/back-host/auth`,
    // aquarium: `/back-host/aquariums`,
});