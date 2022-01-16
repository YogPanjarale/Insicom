import { db } from "./firebase";
import { doc,getDoc } from "firebase/firestore";
export default function getUserDoc(userId: string) {
    const userRef = doc(db,"users",userId);
    return getDoc(userRef)  
}