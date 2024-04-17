import { Formik } from "formik";
import ScheduleForm from "../components/scheduleForm";
import { useDispatch } from "react-redux";
import { addAppointment } from "../redux/reducer"; // Importa la acción addAppointment
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { validateSchedule } from "../helpers/validate";

const Schedule = () => {
  const userId = useSelector((state) => state.user.user.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const newAppointment = { ...values, userId, status: "active" }; 
      const response = await axios.post('http://localhost:3000/appointments/schedule', newAppointment);
      console.log('Respuesta del servidor:', response.data);
      dispatch(addAppointment(response.data));
      setSubmitting(false);
      navigate("/appointments");
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert("Ha ocurrido un error al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.");
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        date: "",
        time: "",
      }}
      validate={validateSchedule}
      onSubmit={handleSubmit}
    >
      {formik => (
        <ScheduleForm formik={formik} />
      )}
    </Formik>
  );
};

export default Schedule;
