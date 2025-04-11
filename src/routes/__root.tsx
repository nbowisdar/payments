import Footer from "@/components/fotter"
import DefaultLayout from "@/layouts/Default"
import { Outlet, createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
	component: () => (
		<>
			<DefaultLayout>
				<Outlet />
				<Footer />
			</DefaultLayout>
		</>
	),
})
