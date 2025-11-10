export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#04000A]/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold text-white">Team Registration</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
