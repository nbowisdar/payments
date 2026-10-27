import { brand } from "@/brand"
import Fifth from "@/components/fifth"
import { First } from "@/components/first"
import { Forth } from "@/components/forth"
import Second from "@/components/second"
import { Third } from "@/components/third"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="text-center w-full">
			<div>
				<First />
				{brand.showHeroLogo ? null : (
					<div className="flex justify-center">
						<img
							src={brand.logo}
							alt={brand.logoAlt}
							className="block"
							width={brand.homeLogoWidth}
						/>
					</div>
				)}
				<Second />
				<Third />
				<Forth />
				<Fifth />
			</div>
		</div>
	)
}
