import { useState, useEffect } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage({ onGetStarted }) {
  const [currentDate] = useState(new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  }))

  // Dynamic tagline rotation
  const taglines = [
    ['Innovate.', 'Ideate.', 'Experience.'],
    ['Pitch.', 'Build.', 'Inspire.'],
    ['Create.', 'Connect.', 'Transform.']
  ]
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0)

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % 3)
    }, 5000) // Change every 4 seconds

    return () => clearInterval(taglineInterval)
  }, [])

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target date to Nov 28, 2025
    const targetDate = new Date('2025-11-28T00:00:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0A0118] overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Gradient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left glow - Purple */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#A855F7] rounded-full blur-[150px] opacity-25"></div>
        
        {/* Center glow - Deep Purple */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED] rounded-full blur-[200px] opacity-20"></div>
        
        {/* Bottom right glow - Yellow accent */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FCD34D] rounded-full blur-[150px] opacity-15"></div>
      </div>

      {/* Animated top banner
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#B800FF]/80 overflow-hidden z-50">
        <div className="flex items-center h-full animate-scroll-left whitespace-nowrap">
          <span className="inline-flex items-center text-white font-bold text-lg px-8">
            {currentDate} <Sparkles className="mx-3 w-5 h-5" /> {currentDate} <Sparkles className="mx-3 w-5 h-5" /> {currentDate} <Sparkles className="mx-3 w-5 h-5" /> {currentDate} <Sparkles className="mx-3 w-5 h-5" /> {currentDate} <Sparkles className="mx-3 w-5 h-5" /> {currentDate} <Sparkles className="mx-3 w-5 h-5" />
          </span>
          <span className="inline-flex items-center text-white font-bold text-lg px-8">
            {currentDate} <Sparkles className="mx-3 w-5 h-5" /> {currentDate} <Sparkles className="mx-3 w-5 h-5" /> {currentDate} <Sparkles className="mx-3 w-5 h-5" /> {currentDate} <Sparkles className="mx-3 w-5 h-5" /> {currentDate} <Sparkles className="mx-3 w-5 h-5" /> {currentDate} <Sparkles className="mx-3 w-5 h-5" />
          </span>
        </div>
      </div> */}

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1033]/90 backdrop-blur-md border-b border-[#A855F7]/20" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                <img 
                  src="src/assets/Ideatex_logo_final2.jpg" 
                  alt="IdeateX Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-[#A855F7]">IDEATEX</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#about" 
                className="relative text-gray-300 hover:text-[#A855F7] transition-all duration-300 font-medium group focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:ring-offset-2 focus:ring-offset-[#1A1033] rounded px-2 py-1"
                aria-label="Navigate to About section"
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A855F7] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
              </a>
              <a 
                href="#project" 
                className="relative text-gray-300 hover:text-[#A855F7] transition-all duration-300 font-medium group focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:ring-offset-2 focus:ring-offset-[#1A1033] rounded px-2 py-1"
                aria-label="Navigate to Project section"
              >
                Project
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A855F7] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
              </a>
              <a 
                href="#testimonial" 
                className="relative text-gray-300 hover:text-[#A855F7] transition-all duration-300 font-medium group focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:ring-offset-2 focus:ring-offset-[#1A1033] rounded px-2 py-1"
                aria-label="Navigate to Testimonial section"
              >
                Testimonial
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A855F7] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
              </a>
              <a 
                href="#team" 
                className="relative text-gray-300 hover:text-[#A855F7] transition-all duration-300 font-medium group focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:ring-offset-2 focus:ring-offset-[#1A1033] rounded px-2 py-1"
                aria-label="Navigate to Team section"
              >
                Team
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A855F7] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
              </a>
              <a 
                href="#blog" 
                className="relative text-gray-300 hover:text-[#A855F7] transition-all duration-300 font-medium group focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:ring-offset-2 focus:ring-offset-[#1A1033] rounded px-2 py-1"
                aria-label="Navigate to Blog section"
              >
                Blog
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A855F7] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
              </a>
            </div>

            {/* Register Button - Floating Pill Style */}
            <Button 
              onClick={onGetStarted}
              className="bg-[#A855F7] hover:bg-[#9333EA] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] text-white font-bold px-8 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 border border-[#A855F7]/40 focus:outline-none focus:ring-2 focus:ring-[#FCD34D] focus:ring-offset-2 focus:ring-offset-[#1A1033]"
              aria-label="Register for IdeateX Summit 2025"
            >
              Register Now
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative pt-40 pb-20 px-12 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Main content */}
          <div className="space-y-10 px-4 md:px-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 border-2 border-[#A855F7] rounded-full px-6 py-3 backdrop-blur-sm" role="status" aria-live="polite">
              <div className="w-2 h-2 bg-[#A855F7] rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="text-[#A855F7] font-semibold">IdeateX Summit 2025</span>
            </div>

            {/* Main heading with responsive scaling */}
            <div className="space-y-8 py-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                IdeateX
              </h1>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#A855F7]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>2</span>
                {/* IdeateX Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative">
                  <img 
                    src="src/assets/Ideatex_logo_final2.jpg" 
                    alt="IdeateX Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>25</span>
              </div>
            </div>

            {/* Dynamic Subtitle with animation */}
            <div className="flex flex-wrap gap-6 text-gray-300 text-lg pt-4 min-h-8" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400 }}>
              {taglines[currentTaglineIndex].map((word, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'backwards'
                  }}
                >
                  <span className="font-normal">{word}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button - Mobile centered */}
            <div className="pt-8 pb-12 flex justify-center md:justify-start">
              <Button 
                onClick={onGetStarted}
                className="group relative bg-white/85 text-[#1A1033] hover:bg-[#FCD34D] hover:text-[#1A1033] font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-none border-4 border-[#A855F7]/60 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(168,85,247,0.7)] transition-all focus:outline-none focus:ring-2 focus:ring-[#FCD34D] focus:ring-offset-2 focus:ring-offset-[#1A1033]"
                aria-label="Register for IdeateX Summit 2025"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <span className="flex items-center gap-3">
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right side - Decorative card (hidden on mobile) */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative bg-[#A855F7]/90 rounded-3xl p-10 transform rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-[#7C3AED]/80 shadow-[8px_8px_0px_0px_rgba(124,58,237,0.6)] max-w-sm" role="complementary" aria-label="Event highlights">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-linear-to-br from-[#FCD34D]/90 to-[#FDE68A]/90 rounded-full flex items-center justify-center border-4 border-[#7C3AED]/80" aria-hidden="true">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="space-y-5 text-center">
                <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Innovation</h2>
                <div className="inline-block bg-[#1A1033] text-[#FCD34D] px-5 py-2.5 rounded-xl font-bold text-xl border-2 border-[#FCD34D]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  IdeateX.
                </div>
                <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Pitching.</h3>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-float" aria-hidden="true">
              <span className="text-3xl">💡</span>
            </div>
          </div>
        </div>

        {/* Vertical text labels */}
        {/* <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left">
          <div className="flex items-center gap-8 text-[#B800FF] font-bold">
            <span>CONCEPT</span>
            <Sparkles className="w-4 h-4" />
            <span>MAY</span>
            <Sparkles className="w-4 h-4" />
            <span>INNOVATE</span>
          </div>
        </div> */}

        {/* Marquee above timer - Full Width */}
        <div className="absolute left-0 right-0 mb-8 bg-linear-to-r from-[#A855F7]/80 via-[#7C3AED]/60 to-[#A855F7]/80 py-4 overflow-hidden transform -skew-y-2 -mx-8 md:-mx-16">
          <div className="flex items-center animate-scroll-left whitespace-nowrap">
            <span className="inline-flex items-center text-white font-bold text-lg px-8">
              IdeateX Summit 2025 <span className="mx-3">💡</span> Nov 28, 2025 <span className="mx-3">💡</span> IdeateX Summit 2025 <span className="mx-3">💡</span> Nov 28, 2025 <span className="mx-3">💡</span> IdeateX Summit 2025 <span className="mx-3">💡</span> Nov 28, 2025 <span className="mx-3">💡</span>
            </span>
            <span className="inline-flex items-center text-white font-bold text-lg px-8">
              IdeateX Summit 2025 <span className="mx-3">💡</span> Nov 28, 2025 <span className="mx-3">💡</span> IdeateX Summit 2025 <span className="mx-3">💡</span> Nov 28, 2025 <span className="mx-3">💡</span> IdeateX Summit 2025 <span className="mx-3">💡</span> Nov 28, 2025 <span className="mx-3">💡</span>
            </span>
          </div>
        </div>

        {/* Countdown Timer - In Flow */}
        <div className="mt-20 mb-8">
          {/* Timer section with skew */}
          <div className="transform -skew-y-2 mt-20">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="h-px w-12 bg-linear-to-r from-transparent to-[#A855F7]" aria-hidden="true"></div>
              </div>
              <p className="text-gray-300 text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Join us for IdeateX Summit • November 28, 2025
              </p>
            </div>
            
            {/* Timer Display - Responsive */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4" role="timer" aria-live="polite" aria-atomic="true" aria-label={`Time until IdeateX Summit: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}>
              {/* Days */}
              <div className="group text-center">
                <div className="relative bg-linear-to-br from-[#A855F7]/40 to-[#7C3AED]/40 border-2 border-[#A855F7]/60 rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 mb-3 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] transform transition-all hover:scale-105 hover:border-[#A855F7]">
                  <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#A855F7]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-gray-300 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Days</div>
              </div>
              
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#A855F7]/50 mb-8" aria-hidden="true">:</div>
              
              {/* Hours */}
              <div className="group text-center">
                <div className="relative bg-linear-to-br from-[#A855F7]/40 to-[#7C3AED]/40 border-2 border-[#A855F7]/60 rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 mb-3 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] transform transition-all hover:scale-105 hover:border-[#A855F7]">
                  <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#A855F7]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-gray-300 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Hours</div>
              </div>
              
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FCD34D]/50 mb-8" aria-hidden="true">:</div>
              
              {/* Minutes */}
              <div className="group text-center">
                <div className="relative bg-linear-to-br from-[#FCD34D]/40 to-[#FDE68A]/40 border-2 border-[#FCD34D]/60 rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 mb-3 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] transform transition-all hover:scale-105 hover:border-[#FCD34D]">
                  <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FCD34D]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-gray-300 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Minutes</div>
              </div>
              
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FCD34D]/50 mb-8" aria-hidden="true">:</div>
              
              {/* Seconds */}
              <div className="group text-center">
                <div className="relative bg-linear-to-br from-[#FCD34D]/40 to-[#FDE68A]/40 border-2 border-[#FCD34D]/60 rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 mb-3 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] transform transition-all hover:scale-105 hover:border-[#FCD34D]">
                  <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FCD34D]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-gray-300 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom animated banner */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-r from-[#B800FF]/70 via-[#FFC107]/70 to-[#B800FF]/70 overflow-hidden z-30">
        <div className="flex items-center h-full animate-scroll-right whitespace-nowrap">
          <span className="inline-flex items-center text-[#211E3F] font-bold text-xl px-8">
            IdeateX <Sparkles className="mx-3 w-5 h-5" /> IdeateX <Sparkles className="mx-3 w-5 h-5" /> IdeateX <Sparkles className="mx-3 w-5 h-5" /> IdeateX <Sparkles className="mx-3 w-5 h-5" /> IdeateX <Sparkles className="mx-3 w-5 h-5" />
          </span>
          <span className="inline-flex items-center text-[#211E3F] font-bold text-xl px-8">
            IdeateX <Sparkles className="mx-3 w-5 h-5" /> IdeateX <Sparkles className="mx-3 w-5 h-5" /> IdeateX <Sparkles className="mx-3 w-5 h-5" /> IdeateX <Sparkles className="mx-3 w-5 h-5" /> IdeateX <Sparkles className="mx-3 w-5 h-5" />
          </span>
        </div>
      </div> */}

      {/* Pause button (like in the image) */}
      {/* <button className="fixed bottom-8 left-8 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center border-4 border-[#B800FF]/80 shadow-lg hover:scale-110 transition-transform z-50">
        <div className="flex gap-1.5">
          <div className="w-2 h-6 bg-[#B800FF]/90 rounded"></div>
          <div className="w-2 h-6 bg-[#B800FF]/90 rounded"></div>
        </div>
      </button> */}

      {/* Background decorative elements */}
      {/* <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#B800FF]/40 rounded-full animate-ping"></div> */}
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#FFC107]/40 rounded-full animate-pulse"></div>
      
      {/* Abstract Particle Motion */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#B800FF]/30 rounded-full animate-particle" aria-hidden="true"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#FFC107]/25 rounded-full animate-particle" style={{ animationDelay: '2s' }} aria-hidden="true"></div>
      <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-[#E4AFFC]/30 rounded-full animate-particle" style={{ animationDelay: '4s' }} aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-[#B800FF]/35 rounded-full animate-particle" style={{ animationDelay: '6s' }} aria-hidden="true"></div>
      
      {/* 3D Rotating Lightbulb */}
      <div className="absolute top-1/3 right-1/4 hidden lg:block pointer-events-none" aria-hidden="true">
        <div className="animate-rotate-3d text-6xl opacity-20">
          💡
        </div>
      </div>
    </div>
  )
}
