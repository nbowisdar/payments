import { brand } from "@/brand"

function Contacts() {
	return (
		<div>
			<div>
				<h3 className="text-xl font-medium  mb-3">Contacts</h3>
				<p>
					If you have any questions about this Privacy Policy, please contact
					us.
					<br />
					Email:{" "}
					<a
						href={`mailto:${brand.email}`}
						className="text-blue-600 hover:text-blue-800"
					>
						{brand.email}
					</a>
				</p>
			</div>
		</div>
	)
}

export default Contacts
