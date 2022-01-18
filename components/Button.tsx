export type Props = {
	text: string;
	onClick: () => void;
	logo?: React.ReactNode;
};

export function Button({ text, onClick, logo }: Props) {
	return (
		// <div className="border-dashed border-2 border-gray-400 active:border-solid ">
		<button
			className="bg-white text-primary-dark  text-sm text-left  font-blinker font-medium py-4 pr-4 pl-2
			  focus:border-2  border border-solid border-black shadow-rose-100 shadow-lg	
			 rounded-sm flex flex-row items-center space-x-4 "
			onClick={onClick}
		>

			{logo && <div className="flex items-center justify-center">{logo}</div>}
			<div className="flex items-center justify-center">{text}</div>
		</button>
			//  </div>
	);
}
