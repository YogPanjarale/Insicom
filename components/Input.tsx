type InputProps = {
	placeholder: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	value: string;
	large?: boolean;
};
export function InputM({
	placeholder,
	value,
	onChange,
	large,
}: InputProps): JSX.Element {
	if (large) {
		return (
			<textarea
				className="bg-white text-primary-dark  text-base font-blinker font-medium py-4 px-2 text-left placeholder:text-sm 
			focus:border-2 focus:border-gray-400  border-[1px] border-solid border-black shadow-rose-100 shadow-lg	
			rounded-sm placeholder:text-black placeholder:font-blinker  h-min"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		);
	}
	return (
		<input
			className="marker:bg-white text-primary-dark  text-base font-blinker font-medium py-4 px-2 text-left placeholder:text-sm
	focus:border-2 focus:border-gray-400  border-[1px] border-solid border-black shadow-rose-100 shadow-lg	
	 rounded-sm placeholder:text-black placeholder:font-blinker  h-min"
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
}
