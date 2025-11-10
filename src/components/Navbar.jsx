import { Button } from "@/components/ui/button"

export default function Navbar({ onBackToHome, buttonText = "Back to Home" }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img 
                src="src/assets/Ideatex_logo_final2.jpg" 
                alt="IdeateX Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-purple-500">IDEATEX</span>
          </div>

          <Button 
            onClick={onBackToHome}
            className="bg-purple-600/70 hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] text-white font-bold px-8 py-2.5 rounded-full transition-all duration-300"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </nav>
  )
}
