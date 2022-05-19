import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZj-LV_k-lpjLLf52S70JF4I2uA679E-4",
  authDomain: "columbus-ce0c9.firebaseapp.com",
  projectId: "columbus-ce0c9",
  storageBucket: "columbus-ce0c9.appspot.com",
  messagingSenderId: "965198972708",
  appId: "1:965198972708:web:7b2e37cfd75c53f7f715b1",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app as default, db };
