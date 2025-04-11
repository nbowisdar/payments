const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-8 px-4 w-full text-xl">
			<div className="w-5/6 m-auto flex items-center justify-evenly">
					<img
                    className="block"
						src="https://www.globalpayapp.net/img/logo-bg.svg"
						alt="Global Pay Logo"
                        width={200}
					/>
				<div className="flex flex-col gap-5">
					<div className="flex gap-2">
						<img
							className="block w-6"
							src="https://www.globalpayapp.net/img/map-icon.svg"
							alt=""
						/>
						<p>Königsallee 27 Düsseldorf Germany Office Satellite</p>
					</div>
					<div className="flex gap-2">
						<img
							className="block w-8"
							src="https://www.globalpayapp.net/img/email-icon.svg"
							alt=""
						/>
						<p>Admin@globalpaye.com</p>
					</div>
				</div>
			</div>
			<div className="mx-auto text-center">
				<p>© 2024 CYB © GlobalPay</p>
			</div>
		</footer>
	)
}

export default Footer
