import { Bottom } from "../Bottom";
type Props = {
	quote: string;
	onClick?: () => void;
};
export default function QuotePage({ quote ,onClick}: Props) {
	return (
		<main className=" w-full h-screen px-10 text-center bg-primary-light font-sans-serif flex flex-col items-center">
			<div className="h-full flex flex-col justify-center">
					<h3 className="transform text-4xl w-full text-center font-blinker font-semibold" onClick={onClick}>
						{quote}
					</h3>
			</div>
			<Bottom/>
		</main>
	);
}

