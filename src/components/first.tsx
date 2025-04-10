import PaymentMethodsSlider from "./payments-icons"

export const First = () => {
	return (
		<div className="min-h-[70vh]">
			<div className="min-h-[70vh] flex items-center justify-center">
				<img
					src="https://www.globalpayapp.net/img/logo-bg.svg"
					alt="Global Pay Logo"
					className="block"
				/>
			</div>
            <PaymentMethodsSlider/>
		</div>
	)
}
