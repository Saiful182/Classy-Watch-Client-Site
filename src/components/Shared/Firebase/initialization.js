import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initialization = () => {
    console.log('firebase config');
    const app = initializeApp(firebaseConfig);
}
export default initialization;