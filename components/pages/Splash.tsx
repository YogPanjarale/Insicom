import { Bottom } from "../utils/Bottom";
type Props = {
	onClick?: () => void;
};
export default function SplashScreen({ onClick }: Props) {
	return (
		<main className=" w-full h-screen px-10 text-center bg-primary-light font-sans-serif flex flex-col items-center">
			<div
				className="h-full flex flex-col justify-center"
				onClick={onClick}
			>
				<img src="/assets/logo.svg" className="w-44 h-44 " alt="logo" />
			</div>
			<Bottom />
		</main>
	);
}
