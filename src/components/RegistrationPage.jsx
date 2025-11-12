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
    <div className="relative bg-[#0A0118] overflow-hidden min-h-screen">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 2px, transparent 2px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.3) 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Increased purple gradient in center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#A855F7]/30 via-[#7C3AED]/10 to-transparent pointer-events-none"></div>
      
      {/* Navigation Bar */}
      <Navbar onBackToHome={onBackToHome} buttonText="Back to Home" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex pt-16 md:pt-32 items-start min-h-screen">
          {/* Left Side - Logo */}
          <div className="w-[40%] p-8 md:flex hidden items-center justify-center fixed left-0 top-0 h-screen">
            <div className="relative flex items-center justify-center">
              <img 
                src="src\\assets\\Ideatex_logo_final2.png" 
                alt="IdeateX Logo" 
                className="w-[32rem] h-[32rem] object-contain animate-pulse-slow"
              />
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
