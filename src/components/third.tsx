import { motion } from "framer-motion"

export const Third = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Stagger animations for each child
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

	return (
		<div className="h-3/4 text-white text-2xl pt-5 pb-20">
			{/* Title */}
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.6 }}
				className="font-bold py-6 text-center"
			>
				Why Choose Us.
			</motion.h1>

			{/* Cards */}
			<motion.ul
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				variants={containerVariants}
				className="flex flex-wrap gap-10 justify-center"
			>
				{/* Card 1: Secure Payments */}
				<motion.li variants={itemVariants} className="text-center">
					<motion.img
						className="m-auto"
						src="/img/unique-secured.svg"
						alt="Secure payments icon"
						whileHover={{ scale: 1.05 }} // Subtle hover effect
					/>
					<motion.h3 className="pt-4 max-w-[250px] mx-auto">
						Secure and reliable Payments
					</motion.h3>
				</motion.li>

				{/* Card 2: Fast Integration */}
				<motion.li variants={itemVariants} className="text-center">
					<motion.img
						className="m-auto"
						src="/img/unique-time.svg"
						alt="Fast integration icon"
						whileHover={{ scale: 1.05 }}
					/>
					<motion.h3 className="pt-4 max-w-[250px] mx-auto">
						Fast Integration Time
					</motion.h3>
				</motion.li>

				{/* Card 3: 24/7 Support */}
				<motion.div variants={itemVariants} className="text-center">
					<motion.img
						className="m-auto"
						src="/img/unique-suport.svg"
						alt="Support icon"
						whileHover={{ scale: 1.05 }}
					/>
					<motion.h3 className="pt-4 max-w-[250px] mx-auto">
						24/7 Technical Support
					</motion.h3>
				</motion.div>
			</motion.ul>
		</div>
	)
}
