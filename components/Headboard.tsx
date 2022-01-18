type Props = {
	profilePicture: string;
	onClick: () => void;
};
function HeadBoard({ profilePicture, onClick }: Props) {
	return (
		<div className="flex flex-row justify-between  items-center px-5 py-4 bg-pink-50 border border-black border-opacity-20">
			<img className="w-8 h-8 rounded-lg" src="/assets/logo.svg" />
			<img
				src={profilePicture}
				className="h-8 w-8 rounded-full border-pink-50 "
				onClick={onClick}
			/>
		</div>
	);
}
export default HeadBoard;
