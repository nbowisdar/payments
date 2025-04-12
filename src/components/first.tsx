import PaymentMethodsSlider from "./payments-icons"

export const First = () => {
	return (
		<div className="min-h-[40vh] flex flex-col justify-between bg-[url('/payments/img/heder-bg.png')] bg-center">
			<div className="flex flex-1 items-center justify-center">
				<img
					src="/payments/img/logo-bg.svg"
					alt="Global Pay Logo"
					className="block"
					width={200}
				/>
			</div>
			<div className="text-center">
				<PaymentMethodsSlider />
			</div>
		</div>
	)
}
