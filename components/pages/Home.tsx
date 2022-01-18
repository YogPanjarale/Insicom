import { User } from "firebase/auth";
import { auth } from "@lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import QuotePage from "./QuotePage";
import { useEffect, useState } from "react";
import HeadBoard from "@components/Headboard";

export default function Home() {
	const [user_, loading, error] = useAuthState(auth);
    const [user,setUser] = useState<User>();
    useEffect(() => {
        if(user_) {
            setUser(user_);
        }
    }, [user_]);

	if (loading) {
		return <QuotePage quote="Home Page" />;
	}
    if (error) {
        return <QuotePage quote="An Error Ocurred :(" />;
    }
    if (!!user) {
        return <HeadBoard profilePicture={user.photoURL||""} onClick={()=>{
            //TODO: Edit page
            console.log("Edit Page")
        }}/>;
    }

   
   return <QuotePage quote={"Nothing here 😕 " }/>;
}
