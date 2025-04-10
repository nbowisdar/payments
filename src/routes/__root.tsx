import DefaultLayout from "@/layouts/Default"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

export const Route = createRootRoute({
	component: () => (
		<>
			<DefaultLayout>
				<Outlet />
			</DefaultLayout>
		</>
	),
})
