import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyC1dtV8Tq_9PQ7uN-qldr82oQlDYCkJGE0",
    authDomain: "fir-cloud-messaging-5956a.firebaseapp.com",
    projectId: "fir-cloud-messaging-5956a",
    storageBucket: "fir-cloud-messaging-5956a.appspot.com",
    messagingSenderId: "320820030328",
    appId: "1:320820030328:web:9574f2b7138fb762f2368d"
  };

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
