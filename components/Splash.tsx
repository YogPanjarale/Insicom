export default function SplashScreen({ quote }: { quote?: string }) {
	return (
		<main className=" w-full h-screen px-10 text-center bg-primary-light font-sans-serif flex flex-col items-center">
			<div className="h-full flex flex-col justify-center">
				{!!quote ? (
					<h3 className="text-3xl w-full text-center font-blinker font-semibold">{quote}</h3>
				) : (
					<img
						src="/assets/logo.svg"
						className="w-48 h-48 mb-8"
						alt="logo"
					/>
				)}
			</div>
			<p
				className={`w-max 
 font-blinker font-normal sm:text-xl 
         px-4 pb-16  text-xl  text-center `}
			>
				Insicom | Smarter Everyday
			</p>
		</main>
	);
}
