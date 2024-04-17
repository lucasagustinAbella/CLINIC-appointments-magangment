import './styles/globalStyles.css';
import Appointments from './views/allAppointments';
import Home from './views/Home'
import Header from "./components/Header"
 import Footer from './components/Footer'
import Register from './views/Register';
import Login from './views/Login';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Profile from './views/Profile';
import Contacto from './views/Contacto';
import Landing from './views/Landing';
import Schedule from "./views/scheduleAppointment"

// import './App.css'

function App() {
  const location = useLocation();

  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='*' element={<ErrorPage />}/>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/landing" element={<Landing />} />
        <Route path='/schedule' element={<Schedule/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;