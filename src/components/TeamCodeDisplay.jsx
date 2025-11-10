import { Copy, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function TeamCodeDisplay({ isOpen, onClose, teamCode }) {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(teamCode)
      .then(() => alert('Team code copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-[#1a1a1a] border-gray-800 rounded-2xl">
        <DialogHeader className="pt-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <DialogTitle className="text-2xl text-gray-100 text-center">
              Payment Successful!
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 py-6 px-2">
          <p className="text-center text-gray-400">
            Your team has been created successfully. Share this code with your team members.
          </p>

          {/* Team Code Display */}
          <div className="bg-gradient-to-r from-purple-900/40 to-violet-900/40 border-2 border-purple-500/60 rounded-xl p-8">
            <p className="text-sm text-gray-400 text-center mb-3">Your Team Code</p>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-purple-400 tracking-widest mb-4 font-mono">
                {teamCode}
              </p>
              <Button
                onClick={handleCopyCode}
                variant="outline"
                className="border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 text-purple-400 hover:text-purple-300"
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy Code
              </Button>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-[#232323] border border-gray-700 rounded-xl p-4 space-y-2">
            <h4 className="text-sm font-semibold text-gray-300">Important Notes:</h4>
            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
              <li>Save this team code securely</li>
              <li>Share with your team members to join</li>
              <li>Team members will need this code to join your team</li>
              <li>Keep this code confidential</li>
            </ul>
          </div>

          {/* Close Button */}
          <Button
            onClick={onClose}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
