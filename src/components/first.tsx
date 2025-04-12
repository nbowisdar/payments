import { motion } from "framer-motion"
import PaymentMethodsSlider from "./payments-icons"

export const First = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="min-h-[40vh] flex flex-col justify-between bg-[url('/payments/img/heder-bg.png')] bg-center bg-cover"
		>
			{/* Logo with floating animation */}
			<motion.div
				className="flex flex-1 items-center justify-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						type: "spring",
						stiffness: 60,
						damping: 10,
					},
				}}
				viewport={{ once: true, margin: "-50px" }}
				whileHover={{
					y: -5,
					transition: { type: "spring", stiffness: 200 },
				}}
			>
				<motion.img
					src="/payments/img/logo-bg.svg"
					alt="Global Pay Logo"
					className="block"
					width={200}
					animate={{
						y: [0, -5, 0],
					}}
				/>
			</motion.div>

			{/* Payment Methods Slider */}
			<motion.div
				className="text-center"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						delay: 0.3,
						type: "spring",
						stiffness: 50,
						damping: 10,
					},
				}}
				viewport={{ once: true, margin: "-50px" }}
			>
				<PaymentMethodsSlider />
			</motion.div>
		</motion.div>
	)
}
