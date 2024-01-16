// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDAWpcoBhC8aDFKhgSO-80M5Li4mEi1Hwg",
    authDomain: "socialbook-819f6.firebaseapp.com",
    databaseURL: "https://socialbook-819f6-default-rtdb.firebaseio.com",
    projectId: "socialbook-819f6",
    storageBucket: "socialbook-819f6.appspot.com",
    messagingSenderId: "452562531035",
    appId: "1:452562531035:web:46cef4dc7b5fb8526592fe"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
