import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown -1);
        }, 1000);
        setTimeout(() => {
            clearInterval(countdownInterval);
            navigate("/home");
        }, 5000);
        return () => clearInterval(countdownInterval);
    }, [navigate]);
    return (
     <div>
     <h1>Pagina no encontrada</h1>
     <h1>o en desarrollo</h1>
     <p>Redirecting to home in {countdown} seconds </p>  
     </div>
    )  
   }

   export default ErrorPage;