const data = [
    {
        number: 100000,
        desc: "Monthly New Traffic",
        afterNumber: "+"
    },
    {
        number: 90,
        desc: "Approval rate more than",
        afterNumber: "%"
    },
    {
        number: 50000,
        desc: "Transactions Per Day",
        afterNumber: "+"
    },
    {
        number: 12000,
        desc: "Regular customers",
        afterNumber: "+"
    },
]


export const Forth = () => {
    return (
			<div className="bg-[url('https://www.globalpayapp.net/img/back-img.png')] bg-center bg-cover">
				<p className="mt-8 pt-7 text-2xl font-bold">
					Join millions getting secured payment
				</p>
				<div className="min-h-[30vh] flex items-center">
					{" "}
					{/* Key change here */}
					<div className="text-center w-full">
						{" "}
						{/* New wrapper div */}
						<div className="flex flex-wrap  justify-center gap-8 px-4">
							{data.map((item, index) => (
								<div
									key={index}
									className="border-4 border-orange-500 p-4 rounded-lg bg-gray-900 min-w-[200px] text-center"
								>
									<p className="text-xl mb-2">
										{item.number}
										{item.afterNumber}
									</p>
									<p className="text-sm">{item.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		)
  };