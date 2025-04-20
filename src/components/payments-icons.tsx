import { motion } from "framer-motion"

const PaymentMethodsSlider = () => {
	const paymentMethods = [
		{
			id: 1,
			imgSrc: "/img/visa%201.svg",
			alt: "Visa",
		},
		{
			id: 2,
			imgSrc: "/img/logo-master%201.svg",
			alt: "Mastercard",
		},
		{
			id: 3,
			imgSrc: "/img/visa%201.svg",
			alt: "Visa",
		},
		{
			id: 4,
			imgSrc: "/img/logo-master%201.svg",
			alt: "Mastercard",
		},
	]

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	}

	const item = {
		hidden: { x: -50, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
			},
		},
		hover: {
			scale: 1.1,
			transition: { type: "spring", stiffness: 400, damping: 10 },
		},
	}

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={container}
			className="flex gap-4 justify-evenly items-center pb-7 flex-wrap"
		>
			{paymentMethods.map((method, index) => (
				<motion.div
					key={method.id}
					variants={item}
					whileHover="hover"
					className="flex-shrink-0 mx-4"
					role="listitem"
					aria-label={`${index + 1} / ${paymentMethods.length}`}
					style={{ minWidth: "80px" }} // Ensures consistent sizing
				>
					<motion.img
						src={method.imgSrc}
						alt={method.alt}
						className="w-full h-auto object-contain"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					/>
				</motion.div>
			))}
		</motion.div>
	)
}

export default PaymentMethodsSlider
