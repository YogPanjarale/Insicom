import { auth, storage } from "@lib/firebase";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Bottom } from "../Bottom";
import { InputM } from "../Input";
import { Button } from "@components/Button";
import repo from "@lib/user_repo";
// import {updateProfile} from 'firebase/auth'
export default function EditProfilePage() {
	const [isEdit, setIsEdit] = useState(true);
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [bio, setBio] = useState("");
	const [avatar, setAvatar] = useState("");
	const router = useRouter();
	if (!user && !loading && !error) {
		alert("You need to login first");
		router.push("/login");
	}
	// const updateProfilePic = async (e: any) => {
	// 	if (!user!.uid){
	// 		return
	// 	}
	// }
	useEffect(() => {
		let f = async () => {
			if (!user) {
				return;
			}
			const userData = await repo.getUser(user.uid);
			if (userData) {
				setName(userData.name);
				setUsername(userData.username);
				setBio(userData.bio);
				setAvatar(userData.avatar || (user.photoURL ? user.photoURL : ""));
			}   
		};
		f();
	}, [user]);

	function trimAll() {
		setName(name.trim());
		setUsername(username.trim());
		setBio(bio.trim());
	}
	async function onContinue() {
		trimAll();
		if (!user!.uid) {
			return;
		}
		const userDoc = (await repo.getUserDoc(user!.uid)).data();
		const profilePic = !!userDoc
			? userDoc?.profilePic
			: user?.photoURL || "";
		const newUserDoc = {
			...userDoc,
			name,
			username,
			bio,
			profilePic: profilePic || "",
		};
		if (!userDoc) {
			console.log("User not found");
			if (!isEdit) {
				repo.createUserDoc(user!.uid, newUserDoc);
			}
			return;
		}
		await repo.updateUserDoc(user!.uid, newUserDoc);
		!isEdit&&router.push("/");
	}
	function handleChange(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		setter: (v: string) => void
	) {
		setter(e.target.value);
	}
	function makeHandler(setter: (v: string) => void) {
		return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
			handleChange(e, setter);
	}
    function onBackClick(){
        router.back()
    }

	return (
		<main className=" w-full h-screen px-8 p-4 text-center bg-primary-light font-sans-serif flex flex-col items-center">
			<div className="h-full flex flex-col  space-y-2">
                <div className="flex flex-row">

                <button className="relative font-blinker text-4xl  
                  right-10 xl:right-[500px] lg:right-[300px] md:right-1/3 sm:right-1/3" onClick={onBackClick}>
                    <img src="/assets/X.svg"></img>
                </button>
				<h3 className=" relative right-3   text-4xl w-full text-center py-2 font-blinker font-semibold">
					{isEdit ? "Edit" : "Set-up"} your profile
				</h3>
                </div>
				{!loading && (
					<div className="flex  flex-col space-y-2">
						<div className="flex justify-center space-y-2">
							<img
								className="w-32 h-32 rounded-full"
								src={avatar}
								alt="profile"
							/>
						</div>
						<button className="text-sm font-blinker text-black font-semibold">
							Change your profile photo
						</button>
						<InputM
							placeholder="Enter your name"
							value={name}
							onChange={makeHandler(setName)}
						/>
						<InputM
							placeholder="Setup your username"
							value={username}
							onChange={makeHandler(setUsername)}
						/>
						<InputM
							placeholder="Write some thing about you"
							value={bio}
							onChange={makeHandler(setBio)}
							large
						/>
						<div className=" w-full flex flex-col items-center pt-6 ">
							{name && username && bio && (
								<Button
                                    long
									text={isEdit ? "Save Edits" : "Continue →"}
									onClick={onContinue}
								/>
							)}
						</div>
					</div>
				)}
			</div>
			<Bottom />
		</main>
	);
}