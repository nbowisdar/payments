import { motion } from "framer-motion"

const Fifth = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", damping: 10, stiffness: 100 },
		},
	}

	const imageVariants = {
		hidden: { x: -50, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
	}

	const rightImageVariants = {
		hidden: { x: 50, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
	}

	return (
		<main className="min-h-screen max-w-5/10 min-w-96 text-white m-auto">
			<div className="container mx-auto px-4 py-8">
				{/* Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="text-center mb-10"
				>
					<motion.h1
						variants={itemVariants}
						className="text-3xl md:text-4xl font-bold mb-2"
					>
						GLOBALPAY - Your Trusted Payment Gateway
					</motion.h1>
					<motion.p variants={itemVariants} className="text-xl text-gray-300">
						GLOBALPAY guarantees safe and secure online payments.
					</motion.p>
				</motion.div>

				{/* First Row */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="grid md:grid-cols-2 gap-6 mb-10"
				>
					<motion.div
						variants={itemVariants}
						className="flex flex-col justify-center"
					>
						<motion.div
							variants={itemVariants}
							className="border-2 border-orange-500 rounded-lg p-6 mb-6"
						>
							<h2 className="text-xl font-semibold mb-2">
								Secure Online Payments
							</h2>
						</motion.div>
						<motion.div
							variants={itemVariants}
							className="border-2 border-orange-500 rounded-lg p-6"
						>
							<p className="text-lg">
								Welcome to Globalpay - the most promising and safest way to
								process online payments.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						variants={imageVariants}
						className="rounded-lg overflow-hidden"
					>
						<img
							src="/payments/img/advantages1.png"
							alt="Person using mobile payment"
							width={500}
							height={400}
							className="w-full h-full object-cover"
						/>
					</motion.div>
				</motion.div>

				{/* Second Row */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="grid md:grid-cols-2 gap-6 mb-10"
				>
					<motion.div
						variants={imageVariants}
						className="rounded-lg overflow-hidden"
					>
						<img
							src="/payments/img/advantages2.png"
							alt="Person using credit card"
							width={500}
							height={400}
							className="w-full h-full object-cover"
						/>
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="flex flex-col justify-center"
					>
						<motion.div
							variants={itemVariants}
							className="border-2 border-orange-500 rounded-lg p-6 mb-6"
						>
							<h2 className="text-xl font-semibold mb-2">
								Convenient and Secure Payments
							</h2>
						</motion.div>
						<motion.div
							variants={itemVariants}
							className="border-2 border-orange-500 rounded-lg p-6"
						>
							<p className="text-lg">
								Our mission is to provide any business with simple online
								payments that are both convenient and secure.
							</p>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Third Row */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="grid md:grid-cols-2 gap-6 mb-10"
				>
					<motion.div
						variants={itemVariants}
						className="flex flex-col justify-center"
					>
						<motion.div
							variants={itemVariants}
							className="border-2 border-orange-500 rounded-lg p-6 mb-6"
						>
							<h2 className="text-xl font-semibold mb-2">
								Comprehensive Payment Solutions
							</h2>
						</motion.div>
						<motion.div
							variants={itemVariants}
							className="border-2 border-orange-500 rounded-lg p-6"
						>
							<p className="text-lg">
								We provide convenience and security for your financial
								transactions. We support all major types of bank cards and
								payment systems.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						variants={rightImageVariants}
						className="rounded-lg overflow-hidden"
					>
						<img
							src="/payments/img/advantages3.png"
							alt="Credit cards"
							width={500}
							height={400}
							className="w-full h-full object-cover"
						/>
					</motion.div>
				</motion.div>

				{/* Fourth Row */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="grid md:grid-cols-2 gap-6 mb-10"
				>
					<motion.div
						variants={imageVariants}
						className="rounded-lg overflow-hidden"
					>
						<img
							src="/payments/img/advantages4.png"
							alt="Customer support team"
							width={500}
							height={400}
							className="w-full h-full object-cover"
						/>
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="flex flex-col justify-center"
					>
						<motion.div
							variants={itemVariants}
							className="border-2 border-orange-500 rounded-lg p-6 mb-6"
						>
							<h2 className="text-xl font-semibold mb-2">
								Secure 24/7 Service
							</h2>
						</motion.div>
						<motion.div
							variants={itemVariants}
							className="border-2 border-orange-500 rounded-lg p-6"
						>
							<p className="text-lg">
								Our advantage is that we provide the most secure service for our
								customers and provide full support 24/7/365.
							</p>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</main>
	)
}

export default Fifth
