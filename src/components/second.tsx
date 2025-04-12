import { motion } from "framer-motion"

const data = [
	{
		title: "24/7 Technical support",
		description:
			"Our team of experts is always on standby to assist you with any questions.",
		image: "/payments/img/unique1.png",
	},
	{
		title: "Quick Integration Time.",
		description: "User-friendly and high speed integration process..",
		image: "/payments/img/unique2.png",
	},
	{
		title: "Cosmopolitan approach.",
		description: "We welcome all currencies",
		image: "/payments/img/unique3.png",
	},
]

const Second = () => {
	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const item = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
			},
		},
	}

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 w-full"
		>
			<div className="mx-auto w-3/4">
				{/* Title */}
				<motion.div variants={item} className="mb-12">
					<h2 className="text-xl font-extrabold sm:text-2xl">
						Global Payment Gateway. Covering the whole globe.
					</h2>
				</motion.div>

				{/* Cards */}
				<motion.div
					variants={container}
					className="flex flex-wrap gap-8 justify-center"
				>
					{data.map((item, index) => (
						<motion.div
							key={index}
							whileHover={{ y: -5 }}
							className="bg-gray-800 p-6 rounded-lg shadow-md text-yellow-50 border-2 border-orange-500 max-w-[300px]"
						>
							<motion.img
								src={item.image}
								alt={item.title}
								initial={{ scale: 0.9 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ type: "spring", delay: 0.2 }}
							/>
							<div className="flex text-start mb-4 mt-4">
								<h3 className="ml-3 text-xl font-bold">{item.title}</h3>
							</div>
							<p className="mt-1 text-md">{item.description}</p>
						</motion.div>
					))}
				</motion.div>

				{/* Button */}
				<motion.div variants={item} className="mt-12 text-center">
					<motion.button
						whileHover={{
							scale: 1.05,
							backgroundColor: "rgba(249, 115, 22, 0.1)",
						}}
						whileTap={{ scale: 0.95 }}
						className="text-2xl border-2 border-orange-500 hover:cursor-pointer px-11 py-1 rounded-md"
					>
						Join us
					</motion.button>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default Second
