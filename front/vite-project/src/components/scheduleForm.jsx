import styles from "../styles/scheduleForm.module.css";
import { Field, ErrorMessage } from "formik"; 
import { SubmitBtn } from "./submitBtn";

const ScheduleForm = ({ formik }) => {
  const { setFieldValue } = formik;

  const handleTimeChange = (event) => {
    setFieldValue("time", event.target.value);
  };

  const hours = [];
  for (let hour = 7; hour <= 20; hour++) {
    hours.push(`${hour.toString().padStart(2, '0')}:00`);
    hours.push(`${hour.toString().padStart(2, '0')}:30`);
  }

  
  return (
    <form onSubmit={formik.handleSubmit} className={styles.scheduleForm}>
      <div className={styles.scheduleInputs}>
        <label htmlFor="date">Fecha</label>
        <Field type="date" id="date" name="date" />
        <ErrorMessage name="date" component="div" className={styles.errorMessage} />
      </div>
      <div className={styles.scheduleInputs}>
        <label htmlFor="time">Hora</label>
        <Field 
          as="select" 
          id="time" 
          name="time"  
          onChange={handleTimeChange} 
        >
          {hours.map((hour, index) => (
            <option key={index} value={hour}>{hour}</option>
          ))}
        </Field>
        <ErrorMessage name="time" component="div" className={styles.errorMessage} />
      </div>
      <SubmitBtn btnName="Pedir Turno" />
    </form>
  );
};

export default ScheduleForm;
