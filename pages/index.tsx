import Head from "next/head";
import { useEffect, useState } from "react";
import QuotePage from "../components/QuotePage";
import SplashScreen from "../components/Splash";

export default function Index() {
	const [quote, setQuote] = useState("");
	
	return (
		<div className=" min-h-screen">
			<Head>
				<title>Insicom</title>
				<link rel="icon" href="/assets/logo.svg" />
			</Head>
			<SplashScreen />
			{/* <QuotePage quote={quote} /> */}
		</div>
	);
}
