//export const apiUrl = 'http://127.0.0.1:8000/api';
// export const Resources_Url = 'http://127.0.0.1:8000';

export const apiUrl = 'https://admin.qavah.us/api';
export const Resources_Url = 'https://admin.qavah.us';

export const apiUrl1 = 'https://admin.qavah.us';

//  export const apiUrl = 'https://www.thirsty-noether.23-83-37-162.plesk.page/api';
//  export const Resources_Url = 'https://www.thirsty-noether.23-83-37-162.plesk.page/';

// export const apiUrl1= 'https://www.thirsty-noether.23-83-37-162.plesk.page/';
// client export const apiKey = 'AIzaSyAsJQ2w7vW2D7_d92Mg3TI1yojbJC64wso';
//export const apiKey = 'AIzaSyDqnUWO38RJMjRlwsY1imxqB1WI8ZWsU3M';
export const apiKey = 'AIzaSyBCXbhFS_cpfhSEixGKZH1kiJWN0cMCWgs';

export const STRIPE_PUBLISHABLE_KEY = 'pk_live_51KqgoBIvyDpn13UA0fmEN4aeq4ifL2zGkbY6IVw1wonpnIqLXFFBRTyMC9O23JwmFFet4Qc7yf1xLyMmdUMBRt4K00c1C2vv4r';
export const Paypal = {
  // Live: 'ASvGaqcJjfbsA1Cy3rcEgh2IBMGNyGdnOrAGIHTWAEca_R4J2KkDQTbicOaqyN8ReO8BZR15-l5uIbWS',
  //sandbox: 'AawacHOZnio3-2ty0503QBCDkmAy4tj2FNfy4BhmIX5msPeCgh5EaaIwBZC_tncD3kaiiWO9jMWnFP0O',
   // production: 'EB8M2CGsyMUBDU4LsNU1wk_OkUgCIiFwYpw4z1BQdcN6EZOWMMPtzRvm3AexNBjtc7Kb89JBF-bnPWJuss'

  production: 'ASvGaqcJjfbsA1Cy3rcEgh2IBMGNyGdnOrAGIHTWAEca_R4J2KkDQTbicOaqyN8ReO8BZR15-l5uIbWS'
}

export const defaultLocale = 'en';

export const localeOptions = [
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Español' },
]

export const firebaseConfig = {
    apiKey: "AIzaSyCKtdA3uM0mvMeIkKpouAams-CZNSzWFIA",
    authDomain: "qavah-d48ad.firebaseapp.com",
    projectId: "qavah-d48ad",
    storageBucket: "qavah-d48ad.appspot.com",
    messagingSenderId: "284968148682",
    appId: "1:284968148682:web:aff804ca123f79cd0c9e33",
    measurementId: "G-K9KEZ2TMJZ"
};

// export const COMETCHAT_CONSTANTS = {
//   APP_ID: '2092182aee051e28',
//   REGION: 'us',
//   AUTH_KEY: '07ba629476752645dbce6a6c4aad7b2fc680b511'
// }

export const COMETCHAT_CONSTANTS = {
  APP_ID: '2092182aee051e28',
  REGION: 'us',
  AUTH_KEY: '07ba629476752645dbce6a6c4aad7b2fc680b511'
}

export const headers = {
  'Content-Type': 'application/json',
  'Authorization' : 'Bearer '+ localStorage.getItem("token")
}

export const isAuthGuardActive = false




