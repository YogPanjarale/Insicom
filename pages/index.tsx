import Head from "next/head";
import { useEffect, useState } from "react";
import SplashScreen from "../components/Splash";

export default function Index() {
	const [quote, setQuote] = useState("");
	useEffect(() => {
		setTimeout(() => {
			setQuote("   ");
			setTimeout(() => {
				setQuote("MCD sells 1 billion burgers every year");
			}, 500);
		}, 1500);
	}, []);
	return (
		<div className=" min-h-screen">
			<Head>
				<title>Insicom</title>
				<link rel="icon" href="/assets/logo.svg" />
			</Head>
			<SplashScreen quote={quote} />
		</div>
	);
}
