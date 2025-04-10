import { createFileRoute } from "@tanstack/react-router";
import { Third } from "@/components/third";
import Second from "@/components/second";
import { First } from "@/components/first";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="text-center">
			{/* <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]"> */}
			{/* </header> */}
			<div>
			<First/>
			<Second/>
			<Third/>

			</div>
		</div>
	);
}
