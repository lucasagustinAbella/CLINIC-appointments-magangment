import { Formik } from "formik";
import RegisterForm from "../components/registerForm";
import { validateRegister } from "../helpers/validate";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthdate: '',
    nDni: '',
    username: '',
    password: '',
    confirmpassword: ""
  });
  
  const [registerSuccess, setRegisterSuccess] = useState(false); // Estado para el mensaje de registro exitoso
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:3000/users/register', values);
      console.log('Respuesta del servidor:', response.data);
      setRegisterSuccess(true); // Establecer el estado del mensaje de registro exitoso
      setSubmitting(false);
      
      
      navigate("/login");
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setSubmitting(false);
    }
  };

  return (
    <div>
      {registerSuccess && <p>¡Registro exitoso! Por favor, inicia sesión.</p>}
      <Formik
        initialValues={initialValues}
        validate={validateRegister}
        onSubmit={handleSubmit}
      >
        {formik => (
          <RegisterForm formik={formik} />
        )}
      </Formik>
    </div>
  );
};

export default Register;
