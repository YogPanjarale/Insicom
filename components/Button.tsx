export type Props = {
	text: string;
	onClick: () => void;
};


export function Button({ text, onClick }: Props) {
	return (
		<button
			className="bg-white text-primary-dark  text-sm font-blinker font-medium py-4 px-4 border-dashed border-2 border-gray-400 text-left active:border-solid focus:outline-none rounded-sm "
			onClick={onClick}
		>
			{text}
		</button>
	);
}
