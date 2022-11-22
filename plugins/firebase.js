import { initializeApp } from "firebase/app";

class FirebaseConnection {
	initialize() {
        console.log('INICIANDO FIREBASE');
        initializeApp({
apiKey: "AIzaSyDANmew5m9a02gkAQttM6_m5blAdnLy_aw",
  authDomain: "capida-diy.firebaseapp.com",
  projectId: "capida-diy",
  storageBucket: "capida-diy.appspot.com",
  messagingSenderId: "666489259358",
  appId: "1:666489259358:web:adc24f1ea23a51fe853bcf",
  measurementId: "G-K53GF02LQE"
        });
	}
}

// Registro dos services
export default ({ }, inject) => {
    let firebaseConnection = new FirebaseConnection();
    firebaseConnection.initialize();
	inject('firebaseConnetion', firebaseConnection);
}