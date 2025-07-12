// firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {};

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
const messaging = () => {}; //getMessaging(firebaseApp);

export { messaging, getToken, onMessage };

const requestNotificationPermission = async () => {
  const isAlreadyFirebaseSaved = localStorage.getItem("fireBaseToken");
  if (isAlreadyFirebaseSaved) {
    return isAlreadyFirebaseSaved;
  }
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      return console.error("Notification permission denied.");
    }

    // const token = await getToken(messaging, {
    //   vapidKey: "", // vapidKey
    // });

    // if (!token) {
    //   return console.error("No registration token available.");
    // }

    // localStorage.setItem("fireBaseToken", token);

    // console.log("Device token:", token);
    return token;
  } catch (error) {
    console.error("Error while requesting notification permission:", error);
  }
};

export default requestNotificationPermission;
