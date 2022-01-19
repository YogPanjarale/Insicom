import getArticles from "@lib/getArticles";
import { useHomeStore } from "@lib/homeStore";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";

type Article = {
	title: string; //title of article max length 50
	intro: string; //small 200 words brief about article
	content: string; //content of the article 4000 words limit
};
type FeedItemProp = Article & {
	full?: boolean;
	onClick?: () => void;
};
function FeedItem({ title, intro, content, full, onClick }: FeedItemProp) {
	return (
		<div
			className="border border-black w-full  p-2 bg-white"
			onClick={onClick}
		>
			<div className="h-24"></div>
			<h3 className=" text-2xl  font-medium text-black">{title}</h3>
			<span className="font-light text-xs leading-3">
				{full ? content : intro}
			</span>
		</div>
	);
}

export function Feed({ user }: { user: User }) {
	const [articles, setArticles] = useState<Article[]>();
	const [article, setArticle] = useState<Article | null>(null);
	const fullArticle = useHomeStore((s) => s.fullArticle);
	const setFullArticle = useHomeStore((s) => s.setFullArticle);
	useEffect(() => {
		const a = getArticles();
		setArticles(a);
	}, []);

	return (
		<div className="h-full bg-primary-light px-4 py-4 font-blinker flex flexwrap flex-col max-h-[80vh] space-y-4 overflow-auto">
			{article&&fullArticle ? (
				<FeedItem {...article} full={true} />
			) : (
				<h3 className="text-2xl text-black font-semibold my-2">
					{" "}
					For you {user.displayName?.split(" ")[0]} 👇
				</h3>
			)}
			{!(article&&fullArticle) &&
				articles?.map((a, i) => {
					return (
						<FeedItem
							title={a.title}
							intro={a.intro}
							content={a.content}
							key={"k" + i}
							onClick={() => {
								setArticle(a);
								setFullArticle();
							}}
						/>
					);
				})}
		</div>
	);
}
