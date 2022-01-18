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
			if (!loading&& !error){
			if(!!!user){
				console.log("Login Page");
				router.push("/login");
			}else{
				console.log("Home Page");
				router.push("/home");
			}
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
