import { Copy, Upload } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function PaymentDialog({ isOpen, onClose, onSubmit, formData }) {
  const [transactionId, setTransactionId] = useState('')
  const [screenshot, setScreenshot] = useState(null)

  const upiId = 'example@upi'

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId)
      .then(() => alert('UPI ID copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setScreenshot(event.target.files[0])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      transactionId,
      screenshot,
      formData
    })
    // Reset form
    setTransactionId('')
    setScreenshot(null)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[60vw] md:max-w-[60vw] lg:max-w-[60vw] bg-[#1a1a1a] border-gray-800 rounded-2xl mt-20">
        <DialogHeader className="pt-6">
          <DialogTitle className="text-2xl text-gray-100 text-center">Complete Payment</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-6 px-2">
          {/* QR Code Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="h-64 w-64 bg-gray-800 flex items-center justify-center rounded-xl border-2 border-gray-700">
              <span className="text-gray-400 text-center">QR Code<br/>Scan to Pay</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#232323] px-4 py-2 rounded-lg border border-gray-700">
              <span className="font-medium text-gray-300 text-sm">{upiId}</span>
              <Button 
                type="button"
                size="icon" 
                variant="ghost" 
                onClick={handleCopy} 
                className="hover:bg-purple-500/10 hover:text-purple-400 h-8 w-8"
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy UPI ID</span>
              </Button>
            </div>
          </div>

          {/* Transaction ID Input */}
          <div className="space-y-2">
            <label htmlFor="transactionId" className="text-sm text-gray-400 font-medium">
              Transaction ID <span className="text-red-400">*</span>
            </label>
            <input
              id="transactionId"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter transaction ID"
              className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none placeholder-gray-500"
              required
            />
          </div>

          {/* Payment Screenshot Upload */}
          <div className="space-y-2">
            <label htmlFor="screenshot" className="text-sm text-gray-400 font-medium">
              Payment Screenshot <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-col items-center space-y-3">
              <input
                id="screenshot"
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
                required
              />
              <Button
                type="button"
                variant="outline"
                className="w-full border-2 border-dashed border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 text-gray-300 rounded-xl py-6"
                onClick={() => document.getElementById('screenshot')?.click()}
              >
                <Upload className="mr-2 h-5 w-5" />
                {screenshot ? 'Change Screenshot' : 'Upload Screenshot'}
              </Button>
              {screenshot && (
                <div className="text-sm text-gray-400 bg-[#232323] px-4 py-2 rounded-lg w-full text-center border border-gray-700">
                  ✓ {screenshot.name}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Submit Payment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
