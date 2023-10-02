/**
 *                                ======================
 *                            INNITIAL INSTALLATION
 *                           =================
 * 
 * 1. Visit: Console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register App (Create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER:: "Do not ever share, show or git push your firebaseConfig"
 * 
 *                        =================
 *                            INTEGRATION
 *                           ===================
 * 
 * 7. firebase -> go to docs -> build -> authentication -> web -> get started'
 * 8. export default app; from the firebaseinit.js
 * 9.login.jsx: import { getAuth } from "firebase/auth"; and create const auth = getAuth(app); 
 * 
 *                         =================
 *                            PROVIDER SETUP
 *                           ===================
 *
 * 10. import and write const provider = new GoogleAuthProvider();
 * 11. use signInWithPopUp and pss auth and provider
 * 12. Activate sign in method(google, facebook, twitter)
 * 13. console.firebase.google.com -> simple-firebase -> Authentication -> User account management -> Authorized domains -> Add Domain
 * 14. [vite]: change
 * 
 * 
 */