/**
 * 
 * -----------------------------
 *         INITIAL SETUp
 * ---------------------------------
 * 
 * 1. visit : console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3.register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. Do not publish or make firebase config to public by pushing  those to github
 * 
 * ----------------------------------------------------
 *                   INTEGRATION
 * --------------------------------------------------------------
 * 
 * 
 * 7.Visit: go to docs> build > authentication> web > get started
 * 8. export app from the firebase.config.js file : exp[ort default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 * 
 * -----------------------------------------------
 *                  Provider setup
 * ----------------------------------------------
 * 
 * 11. Import a google auth provider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sign-in method ( google, facebook, github)
 * 14. [vite]: change 127.0.0.1 to localhost
 * 
 * 
 * -----------------------------------------
 *          more Auth provider
 * ----------------------------------------
 * 1. Activate the auth provider (create app, provider redirect url, client id , client secret)
 */