import { createFileRoute } from "@tanstack/react-router"
import { Third } from "@/components/third"
import Second from "@/components/second"
import { First } from "@/components/first"
import { Forth } from "@/components/forth"
import Fifth from "@/components/fifth"

export const Route = createFileRoute("/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="text-center w-full">
			<div>
				<First />
				<div className="flex justify-center">
					<img
						src="/img/mondex.png"
						alt="Global Pay Logo"
						className="block"
						width={400}
					/>
				</div>
				<Second />
				<Third />
				<Forth />
				<Fifth />
			</div>
		</div>
	)
}
