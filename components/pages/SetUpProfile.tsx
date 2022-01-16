import { auth, storage } from "@lib/firebase";
import getUserDoc from "@lib/getUserDoc";
import { ref } from "firebase/storage";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Bottom } from "../utils/Bottom";
// import {updateProfile} from 'firebase/auth'
export default function SetUpProfilePage() {
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [bio, setBio] = useState("");
	const router = useRouter();
	if (!user && !loading && !error) {
		alert("You need to login first");
		router.push("/login");
	}
	// const updateProfilePic = async (e: any) => {
	// 	if (!user!.uid){
	// 		return
	// 	}
	// }
	return (
		<main className=" w-full h-screen px-8 p-4 text-center bg-primary-light font-sans-serif flex flex-col items-center">
			<div className="h-full flex flex-col  space-y-2">
				<h3 className="transform text-4xl w-full text-center py-2 font-blinker font-semibold">
					Set-up your profile
				</h3>
				{!loading && (

					<div className="flex  flex-col space-y-2">
						<div className="flex justify-center space-y-2">
							<img
								className="w-32 h-32 rounded-full"
								src={user!.photoURL||""}
								alt="profile"
							/>
						</div>
						<button className="text-sm font-blinker text-black font-semibold">Change your profile photo</button>
						<InputM  placeholder="Enter your name" value = {name} onChange={(e)=>setName(e.target.value)}/>
						<InputM  placeholder="Setup your username" value = {username} onChange={(e)=>setName(e.target.value)}/>
						<InputM  placeholder="Write some thing about you" value = {bio} onChange={(e)=>setName(e.target.value)} large/>
					</div>
				)}
			</div>
			<Bottom />
		</main>
	);
}
type InputProps = {
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	large?: boolean;
}
function InputM({placeholder,value,onChange,large}:InputProps): JSX.Element {
	if (large){
		return <textarea
		className={`bg-white text-primary-dark  text-base font-blinker font-medium py-4 px-2 text-left placeholder:text-sm active:border-solid focus:outline-none rounded-sm placeholder:text-black placeholder:font-blinker  h-min`}
		type="text"
		placeholder={placeholder}
		value={value}
		onChange={onChange} />;
	}
	return (<input className="marker:bg-white text-primary-dark  text-base font-blinker font-medium py-4 px-2 text-left placeholder:text-sm active:border-solid focus:outline-none rounded-sm placeholder:text-black placeholder:font-blinker  h-min"
		type="text"
		placeholder={placeholder}
		value={value}
		onChange={onChange} />);
	
}

function useDocument(
	arg0: Promise<
		import("@firebase/firestore").DocumentSnapshot<
			import("@firebase/firestore").DocumentData
		>
	>,
	options: any
): [any, any, any] {
	throw new Error("Function not implemented.");
}
