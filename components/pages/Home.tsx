import { User } from "firebase/auth";
import { auth } from "@lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import QuotePage from "./QuotePage";
import { useEffect, useState } from "react";
import HeadBoard from "@components/Headboard";
import { useRouter } from "next/router";
import Downboard from "@components/Downboard";

export default function Home() {
	const router = useRouter();
	const [user_, loading, error] = useAuthState(auth);
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
				<div className="h-full bg-primary-light px-4 py-4 font-blinker flex flexwrap flex-col max-h-[80vh] space-y-4">
					<h3 className="text-2xl text-black my-2"> For you {user.displayName?.split(" ")[0]} 👇</h3>
					<div className="border border-black w-full  p-2 bg-white">
						<div className="h-24"></div>
						<h3 className=" text-2xl  font-medium text-black">How to get started with design</h3>
						<span className="font-light text-xs leading-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tortor ac mi varius ultricies sit amet sit amet ex. Aliquam neque neque, aliquam non facilisis vitae, dapibus in dolor. Suspendisse elementum, mi non imperdiet feugiat, massa nunc auctor eros,</span>
					</div>
					<div className="border border-black w-full  p-2 bg-white">
						<div className="h-24"></div>
						<h3 className=" text-2xl  font-medium text-black">How to get started with design</h3>
						<span className="font-light text-xs leading-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tortor ac mi varius ultricies sit amet sit amet ex. Aliquam neque neque, aliquam non facilisis vitae, dapibus in dolor. Suspendisse elementum, mi non imperdiet feugiat, massa nunc auctor eros,</span>
					</div>
				</div>
                <Downboard/>
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
