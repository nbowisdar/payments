import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"

export const Route = createFileRoute("/payment")({
  component: RouteComponent,
})

function RouteComponent() {
  const [formData, setFormData] = useState({
    depositAmount: '250.00',
    currency: 'GBP',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    fullName: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment submission logic here
    console.log('Payment submitted:', formData)
  }

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-full max-w-md bg-gray-700 rounded-lg shadow-md p-6 border border-gray-600">
        <h2 className="text-lg font-medium text-white text-center mb-5">
          Deposit Amount {formData.depositAmount} {formData.currency}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Credit Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Expiration Date
              </label>
              <div className="flex gap-2">
                <select
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="" className="bg-gray-700">Month</option>
                  <option value="01" className="bg-gray-700">01 - January</option>
                  <option value="02" className="bg-gray-700">02 - February</option>
                  {/* Add remaining months */}
                </select>
                <select
                  name="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="" className="bg-gray-700">Year</option>
                  <option value="2024" className="bg-gray-700">2024</option>
                  <option value="2025" className="bg-gray-700">2025</option>
                  {/* Add more years */}
                </select>
              </div>
            </div>

            <div className="w-24">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength={3}
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

 

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name on Card
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-700"
            >
              Deposit
            </button>
            <button
              type="button"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="mt-6 flex justify-between items-center text-xs text-gray-400">
          <span>TrustLock</span>
          <div className="text-right">
            <div>Mastercard SecureCode</div>
            <div>Verified by Visa</div>
          </div>
        </div>
      </div>
    </div>
  )
}