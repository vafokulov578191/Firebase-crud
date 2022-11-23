import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDbh_-eHkhV34sYNBQj7RIPo_LDNyrIitU",
    authDomain: "todo-list-fbbde.firebaseapp.com",
    projectId: "todo-list-fbbde",
    storageBucket: "todo-list-fbbde.appspot.com",
    messagingSenderId: "690366082922",
    appId: "1:690366082922:web:4405bf0ba991f88b173f13"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);