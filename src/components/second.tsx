const data = [
	{
		title: "24/7 Technical support",
		description:
			"Our team of experts is always on standby to assist you with any questions.",
		image: "https://www.globalpayapp.net/img/unique1.png",
	},
	{
		title: "Quick Integration Time.",
		description: "User-friendly and high speed integration process..",
		image: "https://www.globalpayapp.net/img/unique2.png",
	},
	{
		title: "Cosmopolitan approach.",
		description: "We welcome all currencies",
		image: "https://www.globalpayapp.net/img/unique3.png",
	},
]

const Second = () => {
	return (
		<div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 w-full ">
			<div className="mx-auto w-3/4">
				<div className="mb-12">
					<h2 className="text-3xl font-extrabold sm:text-4xl">
						Global Payment Gateway. Covering the whole globe.
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{data.map((item, index) => (
						<div
							key={index}
							className="bg-gray-800 p-4 rounded-lg shadow-md text-yellow-50 border-2 border-orange-500"
						>
							<img src={item.image} alt="" />
							<div className="flex text-start  mb-4">
								<h3 className="ml-3 text-2xl font-bold ">{item.title}</h3>
							</div>
							<p className="mt-2 ">{item.description}</p>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<button className="text-2xl border-2 border-orange-500 hover:cursor-pointer px-11 py-1 rounded-md">
						Join us
					</button>
				</div>
			</div>
		</div>
	)
}

export default Second
