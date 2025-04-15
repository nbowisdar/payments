import { Link } from "@tanstack/react-router"
import { motion } from "framer-motion"
import { useState } from "react"

// Navigation data
const navLinks = [
	{ name: "Documentation", link: "/payments/docs" },
	{ name: "Terms", link: "/payments/terms-conditions" },
	{ name: "Privacy", link: "/payments/privacy-policy" },
]


const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	return (
		<header className="shadow-sm">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex items-center h-16 justify-between gap-15">
					{/* Logo */}
					<div className="">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className=""
						>
							<Link to="/payments" className="text-xl font-bold">
								GlobalPay
							</Link>
						</motion.div>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex justify-center flex-1 space-x-8">
						{navLinks.map(({name, link}) => (
							<Link
								key={name}
								to={link}
								className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
							>
								{name}
							</Link>
						))}
					</nav>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d={
										mobileMenuOpen
											? "M6 18L18 6M6 6l12 12"
											: "M4 6h16M4 12h16M4 18h16"
									}
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{mobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					exit={{ opacity: 0, height: 0 }}
					className="md:hidden"
				>
					<div className="pt-2 pb-3 space-y-1">
						{navLinks.map((item) => (
							<a
								key={item.name}
								href={item.link}
								className="block pl-3 pr-4 py-2 border-l-4 border-orange-500 bg-gray-900 text-base font-medium"
							>
								{item.name}
							</a>
						))}
					</div>
				</motion.div>
			)}
		</header>
	)
}

export default Header
