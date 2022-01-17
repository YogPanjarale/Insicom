import { auth } from "@lib/firebase";
import getUserDoc from "@lib/getUserDoc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Bottom } from "../utils/Bottom";
import { Button } from "../Button";
import { Router, useRouter } from "next/router";
export default function LoginPage() {
	const router = useRouter();
	const loginWithGoogle = async () => {
		const provider = new GoogleAuthProvider();
		const result = await signInWithPopup(auth, provider).catch(e=>{console.error(e); return null});
		if (!result) return

		// The signed-in user info.
		const user = result.user;
		const doc =  (await getUserDoc(user.uid)).data();
		if(!doc){
			console.log("User not found");
			router.push("/setup-profile");
		}
        console.log(user,doc);
	};
	return (
		<main className=" w-full h-screen px-8 text-center bg-primary-light font-sans-serif flex flex-col items-center">
			<div className="h-full flex flex-col justify-center space-y-2">
				<h3 className="transform text-4xl w-full text-center py-2 font-blinker font-semibold">
					Create your account
				</h3>
				<Button text="Sign-up with Google" onClick={() => loginWithGoogle()} />
				<Button text="Sign-up with Facebook" onClick={() => alert("Comming Soon")} />
			</div>
			<Bottom />
		</main>
	);
}