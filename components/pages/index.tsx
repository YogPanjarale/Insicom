import Head from "next/head";
import { useEffect, useState } from "react";
import { auth } from "@lib/firebase";
import {useAuthState}from 'react-firebase-hooks/auth'
import SplashScreen from "@components/pages/Splash";
import QuotePage from "@components/pages/QuotePage";
import { useRouter } from "next/router";

function Index() {
	// const [quote, setQuote] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const router = useRouter();
	useEffect(() => {
			console.log(user, loading, error);
			if(!!!user){
				console.log("Login Page");
				router.push("/login");
			}
		}, [user, loading, error]);
	return (
		<div className=" min-h-screen">
			{loading ? (
				<SplashScreen />
			) : (
				null
				// // when user is not logged in show login page 
				// !!!user ?<LoginPage />:<LoggedIn/>
			)}
		</div>
	);
}
export type Props = {
	children: React.ReactNode;
}
export default Index
// export default function ClientSafe(props:any) {
// 	const [isBrowser, setIsBrowser] = useState(false);
// 	useEffect(() => {
// 		if (typeof window !== "undefined") {
// 			setIsBrowser(true)
// 		}
// 	}, []);
// 	 return isBrowser? <Index {...props} />:
// 	 <Page><QuotePage quote="Hope you are well"/></Page>;
// }