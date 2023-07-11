importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyC1dtV8Tq_9PQ7uN-qldr82oQlDYCkJGE0",
  authDomain: "fir-cloud-messaging-5956a.firebaseapp.com",
  projectId: "fir-cloud-messaging-5956a",
  storageBucket: "fir-cloud-messaging-5956a.appspot.com",
  messagingSenderId: "320820030328",
  appId: "1:320820030328:web:9574f2b7138fb762f2368d"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  return;
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
