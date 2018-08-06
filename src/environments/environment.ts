import { AngularFireModule } from "../../node_modules/angularfire2";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : 
  {
    apiKey: "AIzaSyC9wLOa68LwLhvwTDC9LAvnayDeVB_KizM",
    authDomain: "fcc-book-trading-ed9b1.firebaseapp.com",
    databaseURL: "https://fcc-book-trading-ed9b1.firebaseio.com",
    projectId: "fcc-book-trading-ed9b1",
    storageBucket: "fcc-book-trading-ed9b1.appspot.com",
    messagingSenderId: "794399711347"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
