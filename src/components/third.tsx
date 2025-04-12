export const Third = () => {
	return (
		// <div className="h-3/4">
		<div className="h-3/4 text-white text-2xl pt-5 pb-20">
			<h1 className="font-bold py-6">Why Choose Us.</h1>
			<ul className="flex flex-wrap gap-10 justify-center">
				<li className="">
					<img
						className="m-auto"
						src="/payments/img/unique-secured.svg"
						alt=""
					/>
					<h3 className="pt-4 max-w-[250px]">Secure and reliable Payments</h3>
				</li>
				<li className="">
					<img className="m-auto" src="/payments/img/unique-time.svg" alt="" />
					<h3 className="pt-4 max-w-[250px]">Fast Integration Time Time</h3>
				</li>
				<div>
					<img
						className="m-auto"
						src="/payments/img/unique-suport.svg"
						alt=""
					/>
					<h3 className="pt-4 max-w-[250px]">24/7 technical Support</h3>
				</div>
			</ul>
		</div>
	)
}
