import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import RegistrationPage from "./components/RegistrationPage"
import IndividualRegistrationPage from "./components/IndividualRegistrationPage"
import LoginPage from "./components/LoginPage"
import PasswordResetPage from "./components/PasswordResetPage"
import PaymentPage from "./components/PaymentPage"
import TeamDashboardPage from "./components/TeamDashboardPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageWrapper />} />
        <Route path="/register" element={<RegistrationPageWrapper />} />
        <Route path="/individual-register" element={<IndividualRegistrationPageWrapper />} />
        <Route path="/login" element={<LoginPageWrapper />} />
        <Route path="/reset-password" element={<PasswordResetPageWrapper />} />
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

function IndividualRegistrationPageWrapper() {
  const navigate = useNavigate()
  
  return (
    <IndividualRegistrationPage onBackToHome={() => navigate('/')} />
  )
}

function LoginPageWrapper() {
  const navigate = useNavigate()
  
  return (
    <LoginPage onBackToHome={() => navigate('/')} />
  )
}

function PasswordResetPageWrapper() {
  const navigate = useNavigate()
  
  return (
    <PasswordResetPage onBackToHome={() => navigate('/')} />
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
