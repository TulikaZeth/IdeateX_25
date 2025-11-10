import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "./Navbar"

export default function RegistrationPage({ onBackToHome }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    libraryId: '',
    email: '',
    contact: '',
    gender: '',
    teamName: ''
  })
  const [showJoinPopup, setShowJoinPopup] = useState(false)
  const [teamCode, setTeamCode] = useState('')
  const [fetchedTeamName, setFetchedTeamName] = useState('')
  const [fetchedTeamLeader, setFetchedTeamLeader] = useState('')

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Simulate fetching team name based on team code
  const handleTeamCodeChange = (code) => {
    setTeamCode(code)
    
    // Simulate API call to fetch team name and leader
    if (code.length === 6) {
      // Mock team data based on code (in real app, this would be an API call)
      const mockTeams = {
        'ABCDEF': { name: 'Team Alpha', leader: 'Arpit' },
        '123456': { name: 'Team Tulls', leader: 'Vaibhav' },
        'DEF456': { name: 'Team Warriors', leader: 'Anant' },
      }
      const teamData = mockTeams[code] || { name: 'Team ' + code, leader: 'Unknown Leader' }
      setFetchedTeamName(teamData.name)
      setFetchedTeamLeader(teamData.leader)
    } else {
      setFetchedTeamName('')
      setFetchedTeamLeader('')
    }
  }

  const handleCreateTeam = () => {
    console.log('Create Team clicked', formData)
    // Navigate to payment page with form data
    navigate('/payment', { state: { formData } })
  }

  const handleJoinTeam = () => {
    setShowJoinPopup(true)
  }

  const handleJoinSubmit = () => {
    console.log('Joining team with code:', teamCode, 'Team Name:', fetchedTeamName, 'Leader:', fetchedTeamLeader, formData)
    // Add your join team logic here
    setShowJoinPopup(false)
    setTeamCode('')
    setFetchedTeamName('')
    setFetchedTeamLeader('')
  }

  const handleCancelJoin = () => {
    setShowJoinPopup(false)
    setTeamCode('')
    setFetchedTeamName('')
    setFetchedTeamLeader('')
  }

  return (
    <div className="relative bg-black overflow-hidden min-h-screen">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 2px, transparent 2px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.3) 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Increased purple gradient in center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900/30 via-purple-950/10 to-transparent pointer-events-none"></div>
      
      {/* Navigation Bar */}
      <Navbar onBackToHome={onBackToHome} buttonText="Back to Home" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex pt-16 md:pt-32 items-start min-h-screen">
          {/* Left Side - Large Purple Neon Bulb - Fixed */}
          <div className="w-[40%] p-8 md:flex hidden items-center justify-center fixed left-0 top-0 h-screen">
            <div className="relative flex items-center justify-center">
              {/* Large Purple Lightbulb */}
              <div className="relative group">
                {/* Outer glow - very dim */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-900 via-purple-800 to-purple-900 rounded-full blur-[100px] opacity-[0.008] group-hover:opacity-[0.012] transition-opacity animate-pulse-slow scale-150"></div>
                <div className="absolute inset-0 bg-purple-900 rounded-full blur-[80px] opacity-[0.005] animate-pulse-slow scale-125" style={{animationDelay: '1s'}}></div>
                
                <svg className="w-96 h-96 relative z-10" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Glass bulb - transparent purple with 3D effect */}
                  <path d="M50 5 C28 5, 15 22, 15 40 C15 52, 20 58, 25 70 L25 82 C25 85, 27 87, 30 87 L70 87 C73 87, 75 85, 75 82 L75 70 C80 58, 85 52, 85 40 C85 22, 72 5, 50 5 Z" 
                        fill="url(#purpleBulbGradient)" 
                        stroke="url(#bulbStroke)"
                        strokeWidth="1.5"
                        className="drop-shadow-[0_0_35px_rgba(147,51,234,0.9)]"
                        opacity="0.85"/>
                  
                  {/* 3D highlight reflection - left side */}
                  <ellipse cx="38" cy="28" rx="8" ry="18" 
                           fill="url(#highlightGradient)" 
                           opacity="0.4"
                           transform="rotate(-15 38 28)"/>
                  
                  {/* Subtle glass shine - top right */}
                  <ellipse cx="60" cy="22" rx="5" ry="10" 
                           fill="url(#shineGradient)" 
                           opacity="0.5"
                           transform="rotate(20 60 22)"/>
                  
                  {/* Darker outer outline for definition */}
                  <path d="M50 5 C28 5, 15 22, 15 40 C15 52, 20 58, 25 70 L25 82 C25 85, 27 87, 30 87 L70 87 C73 87, 75 85, 75 82 L75 70 C80 58, 85 52, 85 40 C85 22, 72 5, 50 5 Z" 
                        fill="none" 
                        stroke="#4c1d95"
                        strokeWidth="2"
                        opacity="0.6"/>
                  
                  {/* Inner shadow for depth */}
                  <path d="M50 5 C28 5, 15 22, 15 40 C15 52, 20 58, 25 70" 
                        fill="none" 
                        stroke="url(#shadowGradient)"
                        strokeWidth="3"
                        opacity="0.3"/>
                  
                  {/* Inner glow effect - dimmer */}
                  <ellipse cx="50" cy="35" rx="25" ry="30" 
                           fill="url(#innerGlow)" 
                           opacity="0.15"
                           className="animate-pulse"/>
                  
                  {/* Professional filament - shorter and thinner */}
                  <g className="animate-pulse" style={{transformOrigin: '50px 50px'}}>
                    {/* Main vertical filament - thinner and shorter */}
                    <path d="M50 38 L50 58" 
                          stroke="#fbbf24" 
                          strokeWidth="0.8" 
                          opacity="0.85"
                          className="drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]"/>
                    
                    {/* Compact zigzag filament design */}
                    <path d="M47 42 L50 44 L53 42 L50 46 L47 48 L50 50 L53 48 L50 52 L47 54" 
                          stroke="url(#filamentGlow)" 
                          strokeWidth="1.2" 
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-pulse drop-shadow-[0_0_8px_rgba(251,191,36,1)]"
                          style={{animationDuration: '2s'}}/>
                    
                    {/* Top connection point */}
                    <circle cx="50" cy="38" r="1.5" fill="#fbbf24" opacity="0.9"/>
                    {/* Bottom connection */}
                    <circle cx="50" cy="58" r="1.5" fill="#fbbf24" opacity="0.9"/>
                  </g>
                  
                  {/* Screw base - metallic with 3D effect */}
                  <g>
                    {/* Base sections with borders and highlights */}
                    <rect x="35" y="87" width="30" height="8" rx="1" fill="url(#baseGradient1)" stroke="#4b5563" strokeWidth="0.5"/>
                    <rect x="35" y="87" width="8" height="8" rx="1" fill="url(#metalHighlight)" opacity="0.4"/>
                    <line x1="35" y1="91" x2="65" y2="91" stroke="#9ca3af" strokeWidth="0.3" opacity="0.6"/>
                    
                    <rect x="35" y="95" width="30" height="6" rx="1" fill="url(#baseGradient2)" stroke="#4b5563" strokeWidth="0.5"/>
                    <rect x="35" y="95" width="7" height="6" rx="1" fill="url(#metalHighlight)" opacity="0.3"/>
                    <line x1="35" y1="98" x2="65" y2="98" stroke="#6b7280" strokeWidth="0.3" opacity="0.6"/>
                    
                    <rect x="35" y="101" width="30" height="6" rx="1" fill="url(#baseGradient1)" stroke="#4b5563" strokeWidth="0.5"/>
                    <rect x="35" y="101" width="7" height="6" rx="1" fill="url(#metalHighlight)" opacity="0.3"/>
                    <line x1="35" y1="104" x2="65" y2="104" stroke="#9ca3af" strokeWidth="0.3" opacity="0.6"/>
                    
                    <rect x="35" y="107" width="30" height="4" rx="1" fill="#555" stroke="#374151" strokeWidth="0.5"/>
                    <rect x="35" y="107" width="6" height="4" rx="1" fill="url(#metalHighlight)" opacity="0.25"/>
                    
                    {/* Thread lines for realism */}
                    <line x1="38" y1="89" x2="62" y2="89" stroke="#6b7280" strokeWidth="0.2" opacity="0.4"/>
                    <line x1="38" y1="93" x2="62" y2="93" stroke="#6b7280" strokeWidth="0.2" opacity="0.4"/>
                    <line x1="38" y1="97" x2="62" y2="97" stroke="#6b7280" strokeWidth="0.2" opacity="0.4"/>
                    <line x1="38" y1="103" x2="62" y2="103" stroke="#6b7280" strokeWidth="0.2" opacity="0.4"/>
                    <line x1="38" y1="109" x2="62" y2="109" stroke="#6b7280" strokeWidth="0.2" opacity="0.4"/>
                    
                    {/* Shadow on right side of base for depth */}
                    <rect x="60" y="87" width="5" height="24" rx="1" fill="url(#baseShadow)" opacity="0.4"/>
                  </g>
                  
                  {/* Bottom contact with 3D effect */}
                  <circle cx="50" cy="113" r="5" fill="url(#contactGradient)" stroke="#374151" strokeWidth="0.5"/>
                  <circle cx="50" cy="113" r="3" fill="url(#contactInner)" stroke="#4b5563" strokeWidth="0.3"/>
                  <circle cx="50" cy="113" r="1.5" fill="#6b7280"/>
                  {/* Highlight on contact */}
                  <ellipse cx="48" cy="111.5" rx="1.5" ry="1" fill="#9ca3af" opacity="0.6"/>
                  
                  <defs>
                    {/* Purple bulb gradient - darker */}
                    <linearGradient id="purpleBulbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#581c87', stopOpacity: 0.25}} />
                      <stop offset="30%" style={{stopColor: '#4c1d95', stopOpacity: 0.28}} />
                      <stop offset="70%" style={{stopColor: '#3b0764', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#2e1065', stopOpacity: 0.28}} />
                    </linearGradient>
                    
                    {/* Glass highlight for 3D effect */}
                    <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#a78bfa', stopOpacity: 0.6}} />
                      <stop offset="100%" style={{stopColor: 'transparent', stopOpacity: 0}} />
                    </linearGradient>
                    
                    {/* Glass shine */}
                    <radialGradient id="shineGradient">
                      <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: 'transparent', stopOpacity: 0}} />
                    </radialGradient>
                    
                    {/* Inner shadow for depth */}
                    <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#1e1b4b', stopOpacity: 0.6}} />
                      <stop offset="100%" style={{stopColor: 'transparent', stopOpacity: 0}} />
                    </linearGradient>
                    
                    {/* Bulb stroke - darker */}
                    <linearGradient id="bulbStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#7c3aed', stopOpacity: 0.35}} />
                      <stop offset="100%" style={{stopColor: '#6b21a8', stopOpacity: 0.25}} />
                    </linearGradient>
                    
                    {/* Inner glow - dimmer */}
                    <radialGradient id="innerGlow">
                      <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 0.3}} />
                      <stop offset="50%" style={{stopColor: '#581c87', stopOpacity: 0.12}} />
                      <stop offset="100%" style={{stopColor: 'transparent', stopOpacity: 0}} />
                    </radialGradient>
                    
                    {/* Filament glow */}
                    <linearGradient id="filamentGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                    </linearGradient>
                    
                    {/* Base gradients with 3D effect */}
                    <linearGradient id="baseGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#d1d5db', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#9ca3af', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#6b7280', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="baseGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#9ca3af', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#6b7280', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#4b5563', stopOpacity: 1}} />
                    </linearGradient>
                    
                    {/* Metal highlight */}
                    <linearGradient id="metalHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#f3f4f6', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: 'transparent', stopOpacity: 0}} />
                    </linearGradient>
                    
                    {/* Base shadow */}
                    <linearGradient id="baseShadow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: 'transparent', stopOpacity: 0}} />
                      <stop offset="100%" style={{stopColor: '#1f2937', stopOpacity: 1}} />
                    </linearGradient>
                    
                    {/* Contact gradients */}
                    <radialGradient id="contactGradient">
                      <stop offset="0%" style={{stopColor: '#9ca3af', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#4b5563', stopOpacity: 1}} />
                    </radialGradient>
                    <radialGradient id="contactInner">
                      <stop offset="0%" style={{stopColor: '#d1d5db', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#6b7280', stopOpacity: 1}} />
                    </radialGradient>
                  </defs>
                </svg>
                
                {/* Multiple animated glow rings */}
                <div className="absolute inset-0 border-2 border-purple-400/40 rounded-full animate-ping-slow"></div>
                <div className="absolute inset-0 border-2 border-violet-400/30 rounded-full animate-ping-slow" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-0 border border-purple-300/20 rounded-full animate-ping-slow" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
          
          <div className="md:w-[60%] w-full md:ml-[40%] md:p-8 p-6 pb-16 flex items-start justify-center">
            <Card className="w-full mx-auto bg-[#1a1a1a] border-2 border-purple-500/30 text-gray-100 rounded-2xl shadow-2xl shadow-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-100">Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Individual Registration Form */}
                <div className="space-y-4 p-6 rounded-xl bg-[#232323] border border-gray-800">
                  <h3 className="font-semibold text-gray-300 text-lg mb-4">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="year"
                        value={formData.year}
                        onChange={(e) => handleChange('year', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Year"
                      />
                      <label
                        htmlFor="year"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Year
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="libraryId"
                        value={formData.libraryId}
                        onChange={(e) => handleChange('libraryId', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Library ID"
                      />
                      <label
                        htmlFor="libraryId"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Library ID
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Email
                      </label>
                    </div>

                    <div className="relative">
                      <select
                        id="gender"
                        value={formData.gender}
                        onChange={(e) => handleChange('gender', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="" disabled hidden>
                          Select Gender
                        </option>
                        <option className="bg-[#2a2a2a]" value="Male">Male</option>
                        <option className="bg-[#2a2a2a]" value="Female">Female</option>
                      </select>
                      <label className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400">
                        Gender
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="teamName"
                        value={formData.teamName}
                        onChange={(e) => handleChange('teamName', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Team Name"
                      />
                      <label
                        htmlFor="teamName"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 transition-all peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-gray-400"
                      >
                        Team Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        id="contact"
                        value={formData.contact}
                        onChange={(e) => handleChange('contact', e.target.value)}
                        className="block px-4 py-3.5 w-full text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 peer placeholder-transparent transition-all outline-none"
                        placeholder="Contact Number"
                      />
                      <label
                        htmlFor="contact"
                        className="absolute left-2 -top-2.5 bg-[#232323] px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-purple-400"
                      >
                        Contact Number
                      </label>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <Button
                    onClick={handleCreateTeam}
                    className="w-full py-6 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all text-white text-base font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                  >
                    Create Team
                  </Button>
                  
                  <Button
                    onClick={handleJoinTeam}
                    variant="outline"
                    className="w-full py-6 border-2 border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 text-purple-400 hover:text-purple-300 text-base font-semibold rounded-xl transition-all"
                  >
                    Join Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Join Team Popup */}
      {showJoinPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border-2 border-purple-500/50 rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-100">Join Team</h3>
            <p className="text-sm text-gray-400">Enter the team code to join an existing team</p>
            
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={teamCode}
                  onChange={(e) => handleTeamCodeChange(e.target.value.toUpperCase())}
                  placeholder="Enter Team Code"
                  className="w-full px-4 py-3 text-gray-100 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none uppercase tracking-widest text-center text-lg font-semibold"
                  maxLength={6}
                />
              </div>

              {/* Team Name Display */}
              {fetchedTeamName && (
                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg space-y-2">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Team Name</p>
                    <p className="text-base font-semibold text-purple-300">{fetchedTeamName}</p>
                  </div>
                  <div className="pt-1 border-t border-purple-500/20">
                    <p className="text-xs text-gray-400 mb-1">Team Leader</p>
                    <p className="text-sm font-medium text-gray-300">{fetchedTeamLeader}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex gap-3 pt-2">
              <Button
                onClick={handleCancelJoin}
                variant="outline"
                className="flex-1 bg-transparent border-gray-700 hover:bg-gray-800 text-gray-300"
              >
                Cancel
              </Button>
              <Button
                onClick={handleJoinSubmit}
                disabled={teamCode.length !== 6}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Join
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
