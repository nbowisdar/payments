const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-8 px-4 w-full text-sm mt-auto">
			<div className="w-5/6 m-auto flex gap-15 justify-evenly items-start">
				<div>
					<img
						className="block"
						src="/payments/img/logo-bg.svg"
						alt="Global Pay Logo"
						width={200}
					/>
					<div className="text-center flex justify-evenly text-orange-400">
						<a
							className="block"
							href="/payments/terms-conditions"
							target="_blank"
						>
							Terms
						</a>
						<a
							className="block"
							href="/payments/privacy-policy"
							target="_blank"
						>
							Privacy
						</a>
					</div>
				</div>

				<div>
					<h3 className="flex justify-between text-xl font-bold text-orange-400">
						Contacts
						<img
							className="block w-8"
							src="/payments/img/email-icon.svg"
							alt=""
						/>
					</h3>
					<p className="mt-2">Admin@globalpayapp.net</p>
				</div>
				<div>
					<h3 className="flex justify-between text-xl font-bold text-orange-400">
						Location
						<img
							className="block w-6"
							src="/payments/img/map-icon.svg"
							alt=""
						/>
					</h3>
					<p className="mt-2">
						20-22 WENLOCK ROAD,LONDON,,United Kingdom (the),N1 7GU
					</p>
				</div>
				<div>
					<h3 className="text-xl font-bold text-orange-400">License</h3>
					<p className="mt-2">MSB registration number: M22944776</p>
					<p className="mt-2">
						Licensed by Ebanx technology LYD incorporation number: 14055475
					</p>
				</div>
			</div>

			<p className="text-center mt-5">© 2024 CYB © GlobalPay</p>
		</footer>
	)
}

export default Footer
