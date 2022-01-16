import { Bottom } from "../utils/Bottom";

export default function SetUpProfilePage() {
	return (
		<main className=" w-full h-screen px-8 text-center bg-primary-light font-sans-serif flex flex-col items-center">
			<div className="h-full flex flex-col justify-center space-y-2">
				<h3 className="transform text-4xl w-full text-center py-2 font-blinker font-semibold">
                        Set-up your profile
					</h3>
			</div>
			<Bottom/>
		</main>
	);
}

