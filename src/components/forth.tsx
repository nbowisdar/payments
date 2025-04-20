import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const data = [
	{
		targetNumber: 100000,
		startNumber: 60000, // Start from 60,000
		desc: "Monthly New Traffic",
		afterNumber: "+",
	},
	{
		targetNumber: 90,
		startNumber: 60, // Start from 60%
		desc: "Approval rate more than",
		afterNumber: "%",
	},
	{
		targetNumber: 50000,
		startNumber: 20000, // Start from 20,000
		desc: "Transactions Per Day",
		afterNumber: "+",
	},
	{
		targetNumber: 12000,
		startNumber: 5000, // Start from 5,000
		desc: "Regular customers",
		afterNumber: "+",
	},
]

export const Forth = () => {
	const [counts, setCounts] = useState(data.map((item) => item.startNumber))
	const [ready, setReady] = useState(false)

	const { ref, inView } = useInView({
		threshold: 0.1, // Trigger when 10% of element is visible
		triggerOnce: true, // Run only once when element appears
	})

	useEffect(() => {
		if (!inView || ready) {
			return
		}

		const animationDuration = 4_000 // 4 seconds
		const steps = 50
		const stepDuration = animationDuration / steps
		const timers = data.map((item, index) => {
			const stepValue = (item.targetNumber - item.startNumber) / steps

			return setInterval(() => {
				setCounts((prevCounts) => {
					const newCounts = [...prevCounts]
					if (newCounts[index] < item.targetNumber) {
						newCounts[index] = Math.min(
							item.targetNumber,
							newCounts[index] + stepValue
						)
					}
					return newCounts
				})
			}, stepDuration)
		})
		setReady(true)
		return () => timers.forEach((timer) => clearInterval(timer))
	}, [inView])

	const formatNumber = (num: number) => {
		return Math.floor(num).toLocaleString() // Formats as 10,000 instead of 10000
	}

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			className="bg-[url('/img/back-img.png')] bg-center bg-cover"
		>
			<motion.p
				initial={{ y: 20 }}
				whileInView={{ y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="mt-8 pt-7 text-2xl font-bold text-center"
			>
				Join millions getting secured payment
			</motion.p>

			<div className="min-h-[30vh] flex items-center">
				<div className="text-center w-full">
					<div className="flex flex-wrap justify-center gap-8 px-4">
						{data.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.15,
									type: "spring",
									stiffness: 100,
								}}
								whileHover={{ scale: 1.05 }}
								className="border-2 border-orange-500 p-4 rounded-lg bg-gray-900 min-w-[200px] text-center"
							>
								<p className="text-xl mb-2 font-bold text-white">
									{formatNumber(counts[index])}
									{item.afterNumber}
								</p>
								<p className="text-sm text-gray-300">{item.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	)
}
