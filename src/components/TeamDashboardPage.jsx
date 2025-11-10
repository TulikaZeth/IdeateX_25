import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import TeamDetailsPage from "./TeamDetailsPage"

export default function TeamDashboardPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [teamData, setTeamData] = useState(location.state?.teamData || null)

  const handleRemoveMember = (memberId) => {
    setTeamData(prev => ({
      ...prev,
      members: prev.members.filter(member => member.id !== memberId)
    }))
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  if (!teamData) {
    // If no team data, redirect to home
    navigate('/')
    return null
  }

  return (
    <TeamDetailsPage
      teamData={teamData}
      onBackToHome={handleBackToHome}
      onRemoveMember={handleRemoveMember}
    />
  )
}
