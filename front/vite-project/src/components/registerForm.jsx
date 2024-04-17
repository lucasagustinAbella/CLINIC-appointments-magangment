import styles from "../styles/RegisterForm.module.css";
import { Field, ErrorMessage, Formik } from "formik";
import { SubmitBtn } from "./submitBtn";

const RegisterForm = ({formik}) => {
  return (
    // onSubmit={(event) => {event.preventDefault()}}
    <form className={styles.registerForm} onSubmit={formik.handleSubmit}>
    <div className={styles.registerInputs}>
      <label htmlFor="firstName">Nombre</label>
      <Field type="text" id="firstName" name="firstName" />
      <ErrorMessage name="firstName" component="div" className={styles.errorMessage} />
    </div>
    <div className={styles.registerInputs}>
      <label htmlFor="lastName">Apellido</label>
      <Field type="text" id="lastName" name="lastName" />
      <ErrorMessage name="lastName" component="div" className={styles.errorMessage} />
    </div>
    <div className={styles.registerInputs}>
      <label htmlFor="email">Correo Electrónico</label>
      <Field type="email" id="email" name="email" />
      <ErrorMessage name="email" component="div" className={styles.errorMessage} />
    </div>
    <div className={styles.registerInputs}>
      <label htmlFor="birthdate">Fecha de Nacimiento</label>
      <Field type="date" id="birthdate" name="birthdate" />
      <ErrorMessage name="birthdate" component="div" className={styles.errorMessage} />
    </div>
    <div className={styles.registerInputs}>
      <label htmlFor="nDni">Número de DNI</label>
      <Field type="text" id="nDni" name="nDni" />
      <ErrorMessage name="nDni" component="div" className={styles.errorMessage} />
    </div>
    <div className={styles.registerInputs}>
      <label htmlFor="username">Nombre de Usuario</label>
      <Field type="text" id="username" name="username" />
      <ErrorMessage name="username" component="div" className={styles.errorMessage} />
    </div>
    <div className={styles.registerInputs}>
      <label htmlFor="password">Contraseña</label>
      <Field type="password" id="password" name="password" />
      <ErrorMessage name="password" component="div" className={styles.errorMessage} />
    </div>
    <div className={styles.registerInputs}>
      <label htmlFor="confirmpassword">Confirmar Contraseña</label>
      <Field type="password" id="confirmpassword" name="confirmpassword" />
      <ErrorMessage name="confirmpassword" component="div" className={styles.errorMessage} />
    </div>
    <SubmitBtn btnName="Registrar" />
  </form>
);
};
export default RegisterForm;