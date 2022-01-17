import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

class UserRepo {
    getUserDoc(userId: string) {
        const userRef = doc(db,"users",userId);
        return getDoc(userRef)  
    }
    updateUserDoc(userId: string,userDoc: any) {
        const userRef = doc(db,"users",userId);
        return updateDoc(userRef,userDoc)
    }
    createUserDoc(userId: string,userDoc: any) {
        const userRef = doc(db,"users",userId);
        console.log("[create doc]",userRef)
        return updateDoc(userRef,userDoc)
    }
}
const repo = new UserRepo();
export default repo;