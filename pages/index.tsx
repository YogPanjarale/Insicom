import Head from "next/head";
import { useEffect, useState } from "react";
import { auth } from "@lib/firebase";
import {useAuthState}from 'react-firebase-hooks/auth'
import SplashScreen from "@components/Splash";
import LoginPage from "@components/LoginPage";
import QuotePage from "@components/QuotePage";

function Index() {
	// const [quote, setQuote] = useState("");
	const [user, loading, error] = useAuthState(auth);
	useEffect(() => {
			console.log(user, loading, error);
			if(!!!user){
				console.log("Login Page");
					
			}
		}, [user, loading, error]);
	return (
		<div className=" min-h-screen">
			{loading ? (
				<SplashScreen />
			) : (
				// when user is not logged in show login page 
				!!!user ?<LoginPage />:<QuotePage quote={"LoggedIn as "+user.displayName} />
			)}
		</div>
	);
}
type Props = {
	children: React.ReactNode;
}
function Page({children}:Props){
	return (
		<div className="min-h-screen"> {children}</div>
	)
}
export default function ClientSafe(props:any) {
	const [isBrowser, setIsBrowser] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsBrowser(true)
		}
	}, []);
	 return isBrowser? <Index {...props} />:
	 <Page><QuotePage quote="Hope you are well"/></Page>;
}