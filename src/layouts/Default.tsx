import Footer from "@/components/footer"
import Header from "@/components/Header"
import type { ReactNode } from "react"

interface DefaultLayoutProps {
	children: ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
	return (
		<div className=" bg-gray-800 text-white">
			{/* This container centers all content with max-width and padding */}
			<div className="mx-auto ">
				{/* This centers content vertically and horizontally */}
				<div className="min-h-screen flex flex-col items-center justify-center">
					<Header />
					<main className="min-h-[70vh] flex-grow w-full">{children}</main>
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default DefaultLayout
