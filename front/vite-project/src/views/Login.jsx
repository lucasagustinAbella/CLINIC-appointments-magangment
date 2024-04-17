import { Formik } from "formik";
import LoginForm from "../components/loginForm";
import { validateLogin } from "../helpers/validate";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/reducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:3000/users/login', values);
      console.log('Respuesta del servidor:', response.data);
      dispatch(setUserData(response.data));
      setSubmitting(false);
      navigate("/profile");

    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert("Usuario o contraseña incorrectos");
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validate={validateLogin}
      onSubmit={handleSubmit}
    >
      {formik => (
        <LoginForm formik={formik} />
      )}
    </Formik>
  );
};

export default Login;