import { User } from "firebase/auth";
import { auth } from "@lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import QuotePage from "./QuotePage";
import { useEffect, useState } from "react";
import HeadBoard from "@components/Headboard";
import { useRouter } from "next/router";
import Downboard from "@components/Downboard";
import { Feed } from "../Feed";
import { useHomeStore } from "@lib/homeStore";

export default function Home() {
	const router = useRouter();
	const [user_, loading, error] = useAuthState(auth);
	const resetHome = useHomeStore(s => s.resetHome);
	const [user, setUser] = useState<User>();
	useEffect(() => {
		if (user_) {
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
		return (
			<div className="h-screen bg-primary-light flex flex-col ">
				<HeadBoard
					profilePicture={user.photoURL || ""}
					onClick={() => {
						console.log("Edit Page");
						router.push("/edit-profile")
					}}
				/>
				<Feed user={user}/>
                <Downboard onclicks={[resetHome]}/>
			</div>
		);
	}

	return (
		<QuotePage
			quote={"Nothing here 😕 for you login First !"}
			onClick={() => router.push("/login")}
		/>
	);
}
