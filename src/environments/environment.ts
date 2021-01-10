// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: 'https://api-aquario.herokuapp.com',
  firebaseConfig: {
    apiKey: "AIzaSyDNBzHEeQUTHv2Vuj0XUfXMzLqlCYvEiP0",
    authDomain: "aquarium-frontend.firebaseapp.com",
    projectId: "aquarium-frontend",
    storageBucket: "aquarium-frontend.appspot.com",
    messagingSenderId: "448078783788",
    appId: "1:448078783788:web:4aa8ed06fc257a4b457889",
    measurementId: "G-JTGNH056RL"
  }
  //API: 'http://localhost:8080',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
