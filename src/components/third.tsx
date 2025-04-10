export const Third = () => {
	return (
		// <div className="h-3/4">
		<div className="h-3/4 bg-gray-800 text-white text-2xl">
			<h1 className="font-bold py-6">Why Choose Us.</h1>
			<ul className="flex flex-wrap gap-10 justify-center">
				<li>
					<img className="m-auto" src="https://www.globalpayapp.net/img/unique-secured.svg" alt="" />
					<h3 className="pt-4">Secure and reliable Payments</h3>
				</li>
				<div>
					<img className="m-auto" src="https://www.globalpayapp.net/img/unique-time.svg" alt="" />
					<h3 className="pt-4">Fast Integration Time Time</h3>
				</div>
				<div>
        <img className="m-auto" src="https://www.globalpayapp.net/img/unique-suport.svg" alt="" />
					<h3 className="pt-4">24/7 technical Support</h3>
				</div>
			</ul>
		</div>
	)
}
