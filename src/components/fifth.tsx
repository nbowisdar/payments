const Fifth = () => {
	return (
		<main className="min-h-screen max-w-5/10 min-w-96 text-white m-auto">
			<div className="container mx-auto px-4 py-8">
				{/* Header */}
				<div className="text-center mb-10">
					<h1 className="text-3xl md:text-4xl font-bold mb-2">
						GLOBALPAY - Your Trusted Payment Gateway
					</h1>
					<p className="text-xl text-gray-300">
						GLOBALPAY guarantees safe and secure online payments.
					</p>
				</div>

				{/* First Row */}
				<div className="grid md:grid-cols-2 gap-6 mb-10">
					<div className="flex flex-col justify-center">
						<div className="border-2 border-orange-500 rounded-lg p-6 mb-6">
							<h2 className="text-xl font-semibold mb-2">
								Secure Online Payments
							</h2>
						</div>
						<div className="border-2 border-orange-500 rounded-lg p-6">
							<p className="text-lg">
								Welcome to Globalpay - the most promising and safest way to
								process online payments.
							</p>
						</div>
					</div>
					<div className="rounded-lg overflow-hidden">
						<img
							src="https://www.globalpayapp.net/img/advantages1.png"
							alt="Person using mobile payment"
							width={500}
							height={400}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Second Row */}
				<div className="grid md:grid-cols-2 gap-6 mb-10">
					<div className="rounded-lg overflow-hidden">
						<img
							src="https://www.globalpayapp.net/img/advantages2.png"
							alt="Person using credit card"
							width={500}
							height={400}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col justify-center">
						<div className="border-2 border-orange-500 rounded-lg p-6 mb-6">
							<h2 className="text-xl font-semibold mb-2">
								Convenient and Secure Payments
							</h2>
						</div>
						<div className="border-2 border-orange-500 rounded-lg p-6">
							<p className="text-lg">
								Our mission is to provide any business with simple online
								payments that are both convenient and secure.
							</p>
						</div>
					</div>
				</div>

				{/* Third Row */}
				<div className="grid md:grid-cols-2 gap-6 mb-10">
					<div className="flex flex-col justify-center">
						<div className="border-2 border-orange-500 rounded-lg p-6 mb-6">
							<h2 className="text-xl font-semibold mb-2">
								Comprehensive Payment Solutions
							</h2>
						</div>
						<div className="border-2 border-orange-500 rounded-lg p-6">
							<p className="text-lg">
								We provide convenience and security for your financial
								transactions. We support all major types of bank cards and
								payment systems.
							</p>
						</div>
					</div>
					<div className="rounded-lg overflow-hidden">
						<img
							src="https://www.globalpayapp.net/img/advantages3.png"
							alt="Credit cards"
							width={500}
							height={400}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Fourth Row */}
				<div className="grid md:grid-cols-2 gap-6 mb-10">
					<div className="rounded-lg overflow-hidden">
						<img
							src="https://www.globalpayapp.net/img/advantages4.png"
							alt="Customer support team"
							width={500}
							height={400}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col justify-center">
						<div className="border-2 border-orange-500 rounded-lg p-6 mb-6">
							<h2 className="text-xl font-semibold mb-2">
								Secure 24/7 Service
							</h2>
						</div>
						<div className="border-2 border-orange-500 rounded-lg p-6">
							<p className="text-lg">
								Our advantage is that we provide the most secure service for our
								customers and provide full support 24/7/365.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Fifth
