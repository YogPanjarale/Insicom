import { auth } from "@lib/firebase";
import { Bottom } from "../Bottom";
import { Button } from "../Button";
import { useRouter } from "next/router";
export default function LoginPage() {
    const router = useRouter();
	const logout = async () => {
        await auth.signOut();
        router.push("/");
    };
	return (
		<main className=" w-full h-screen px-8 text-center bg-primary-light font-sans-serif flex flex-col items-center">
			<div className="h-full flex flex-col justify-center space-y-2">
				<h3 className="transform text-4xl w-full text-center py-2 font-blinker font-semibold">
					So you wanna logout ? :(
				</h3>
				<Button text="Logout" onClick={() => logout()} />
				
			</div>
			<Bottom />
		</main>
	);
}
