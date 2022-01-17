import { doc, getDoc, updateDoc,setDoc } from "firebase/firestore";
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
        const userCol = doc(db,"users",userId);
        console.log("[create doc]",userCol)
        return setDoc(userCol,userDoc)
    }
}
const repo = new UserRepo();
export default repo;