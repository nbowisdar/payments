import { Link } from "@tanstack/react-router"
import { motion } from "framer-motion"

const Footer = () => {
	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	}

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 100, damping: 10 },
		},
	}

	return (
		<motion.footer
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={container}
			className="bg-gray-900 text-white py-8 px-4 w-full text-sm mt-auto"
		>
			<div className="flex flex-wrap justify-evenly gap-10">
				<div>
					<motion.div variants={item}>
						<Link to="/payments">
							<motion.img
								className="block"
								src="/payments/img/logo-bg.svg"
								alt="Global Pay Logo"
								width={200}
								whileHover={{ scale: 1.05 }}
							/>
						</Link>

						<motion.div
							className="text-center flex justify-evenly text-orange-400 mt-4"
							variants={item}
						>
							<Link
								className="block hover:text-orange-300"
								to="/payments/terms-conditions"
							>
								Terms
							</Link>
							<Link
								className="block hover:text-orange-300"
								to="/payments/privacy-policy"
							>
								Privacy
							</Link>
						</motion.div>
					</motion.div>
					<motion.p
						className="text-center mt-5"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.8 }}
					>
						© 2024 CYB © GlobalPay
					</motion.p>
				</div>
				<div className="flex flex-col gap-10 max-w-96">
					{/* Contacts */}
					<motion.div variants={item}>
						<motion.h3
							className="flex justify-between text-xl font-bold text-orange-400"
							whileHover={{ x: 5 }}
						>
							Contacts
							<motion.img
								className="block w-8"
								src="/payments/img/email-icon.svg"
								alt="Email icon"
								whileHover={{ rotate: 10 }}
							/>
						</motion.h3>
						<p className="mt-2">Admin@globalpayapp.net</p>
					</motion.div>

					{/* Location */}
					<motion.div variants={item}>
						<motion.h3
							className="flex justify-between text-xl font-bold text-orange-400"
							whileHover={{ x: 5 }}
						>
							Location
							<motion.img
								className="block w-6"
								src="/payments/img/map-icon.svg"
								alt="Map icon"
								whileHover={{ rotate: 10 }}
							/>
						</motion.h3>
						<p className="mt-2">
							20-22 WENLOCK ROAD,LONDON,,United Kingdom (the),N1 7GU
						</p>
					</motion.div>
				</div>

				<div className="flex flex-col gap-10 max-w-96">
					<motion.div variants={item}>
						<motion.h3
							className="text-xl font-bold text-orange-400 "
							whileHover={{ x: 5 }}
						>
							License
						</motion.h3>
						<p className="mt-2">MSB registration number: M22944776</p>
						<p className="mt-2 ">
							Licensed by Ebanx technology LYD incorporation number: 14055475
						</p>
					</motion.div>
					<motion.div variants={item}>
						<motion.h3
							className="text-xl font-bold text-orange-400 mt-4 "
							whileHover={{ x: 5 }}
						>
							Documentation
						</motion.h3>
						<p className="mt-2">
							Read <Link to="/payments/docs">documentation</Link>
						</p>
					</motion.div>
				</div>
			</div>
		</motion.footer>
	)
}

export default Footer
