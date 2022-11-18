// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGjoq1HRN28DEUV9hLsf3N74DGvQ-82Ew",
  authDomain: "kulikops-bastelecke.firebaseapp.com",
  projectId: "kulikops-bastelecke",
  storageBucket: "kulikops-bastelecke.appspot.com",
  messagingSenderId: "5775600019",
  appId: "1:5775600019:web:12d0a329cf6a1d46e82066",
  measurementId: "G-YSV02NH947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
