import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const db = firebase.firestore();
export default function getUserDoc(userId: string) {
    const userRef = db.collection('users').doc(userId);
    return userRef.get();
}