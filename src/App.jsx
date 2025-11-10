import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import RegistrationPage from "./components/RegistrationPage"
import PaymentPage from "./components/PaymentPage"
import TeamDashboardPage from "./components/TeamDashboardPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageWrapper />} />
        <Route path="/register" element={<RegistrationPageWrapper />} />
        <Route path="/payment" element={<PaymentPageWrapper />} />
        <Route path="/team-dashboard" element={<TeamDashboardPageWrapper />} />
      </Routes>
    </Router>
  )
}

function LandingPageWrapper() {
  const navigate = useNavigate()
  
  return (
    <LandingPage onGetStarted={() => navigate('/register')} />
  )
}

function RegistrationPageWrapper() {
  const navigate = useNavigate()
  
  return (
    <RegistrationPage onBackToHome={() => navigate('/')} />
  )
}

function PaymentPageWrapper() {
  const navigate = useNavigate()
  
  return (
    <PaymentPage onBackToHome={() => navigate('/')} />
  )
}

function TeamDashboardPageWrapper() {
  const navigate = useNavigate()
  
  return (
    <TeamDashboardPage onBackToHome={() => navigate('/')} />
  )
}
