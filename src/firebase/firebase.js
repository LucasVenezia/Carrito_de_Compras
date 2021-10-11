//1) Traer firebase
import firebase from "firebase/app";
//2) Traer el servicio que vas a usar
import 'firebase/firestore';

//3) Hacer la inicializacion 

// Idealmente guardar la configuracion en un .env
const firebaseConfig = {
    apiKey: "AIzaSyCzUaw61HqzNZX9C2p8s6zLS95VJ_cKT50",
    authDomain: "ferreteria-alvear.firebaseapp.com",
    projectId: "ferreteria-alvear",
    storageBucket: "ferreteria-alvear.appspot.com",
    messagingSenderId: "545663779216",
    appId: "1:545663779216:web:cac01ed4f3c53a927df315"
};

const app = firebase.initializeApp(firebaseConfig)

//4) tener la referencia de la base de datos

export const firestore = firebase.firestore(app)


