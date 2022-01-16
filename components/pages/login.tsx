import { auth } from "@lib/firebase";
import getUserDoc from "@lib/getUserDoc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Bottom } from "../utils/Bottom";
export default function LoginPage() {
	const [user, loading, error] = useAuthState(auth);
	const loginWithGoogle = async () => {
		const provider = new GoogleAuthProvider();
		const result = await signInWithPopup(auth, provider);
		// The signed-in user info.
		const user = result.user;
		const doc = await (await getUserDoc(user.uid)).data();
        console.log(user,doc);
	};
	return (
		<main className=" w-full h-screen px-8 text-center bg-primary-light font-sans-serif flex flex-col items-center">
			<div className="h-full flex flex-col justify-center space-y-2">
				<h3 className="transform text-4xl w-full text-center py-2 font-blinker font-semibold">
					Create your account
				</h3>
				<Button text="Sign-up with Google" onClick={() => loginWithGoogle()} />
				<Button text="Sign-up with Facebook" onClick={() => 0} />
			</div>
			<Bottom />
		</main>
	);
}
type Props = {
	text: string;
	onClick: () => void;
};
function Button({ text, onClick }: Props) {
	return (
		<button
			className="bg-white text-primary-dark  text-sm font-blinker font-medium py-4 px-4 border-dashed border-2 border-gray-400 text-left active:border-solid focus:outline-none rounded-sm "
			onClick={onClick}
		>
			{text}
		</button>
	);
}
