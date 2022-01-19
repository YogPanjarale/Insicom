import { useState } from "react";

const topics = [
	"World news",
	"Finance Info",
	"Startup News",
	"Startup Info",
	,
	"Tech News",
	"EdTech",
	"Education",
	"Science",
	"Health",
	"Sports",
	"Entertainment",
	"Business",
	"Politics",
	"Travel",
	"Food",
	"Music",
	"Art",
	"Books",
	"Movies",
	"TV",
];

const ChooseInterestPage = () => {
	const [interests, setInterests] = useState<number[]>([]);
    const toggleInterest = (topic: number) => {
        if (interests.includes(topic)) {
            setInterests(interests.filter((t) => t !== topic));
        } else {
        setInterests([...interests, topic]);
        }
    }
	return (
		<div className="h-screen bg-primary-light px-4 py-4 font-blinker flex flexwrap flex-col  space-y-4  ">
			<h3 className="text-2xl text-black font-semibold my-2">
				Choose your interests 👇
			</h3>
			<div className="grid grid-cols-2 gap-8 overflow-auto">
				{topics.map((topic, i) => {
					return (
						<button
							className={`focus:border-2  border border-solid border-black shadow-rose-100 shadow-lg	p-2 py-4 ${interests.includes(i) ? "shadow-2xl border-2 scale-y-105 bg-white" : ""}`}
							key={"k" + i}
                            onClick={() => {
                                toggleInterest(i);
                            }}
					    >
							<div className="h-36"></div>
							<span>{topic}</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};
export default ChooseInterestPage;
