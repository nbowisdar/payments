import { createFileRoute } from '@tanstack/react-router'
import { Third } from "@/components/third"
import Second from "@/components/second"
import { First } from "@/components/first"
import { Forth } from "@/components/forth"
import Fifth from "@/components/fifth"

export const Route = createFileRoute("/payments/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="text-center w-full">
			{/* <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]"> */}
			{/* </header> */}
			<div>
				<First />
				<Second />
				<Third />
				<Forth />
				<Fifth />
			</div>
		</div>
	)
}

