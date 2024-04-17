import styles from "../styles/LoginForm.module.css";
import { Field, ErrorMessage } from 'formik';
import { SubmitBtn } from "./submitBtn";

const LoginForm = ({ formik }) => {
  return (
    <form className= {styles.loginForm} onSubmit={formik.handleSubmit}>
      <div className={styles.loginInputs}>
        <label htmlFor="username">Nombre de Usuario</label>
        <Field type="text" id="username" name="username" />
        <ErrorMessage name="username" component="div" className={styles.errorMessage}/>
      </div>
      <div className={styles.loginInputs}>
        <label htmlFor="password">Contraseña</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" component="div" className={styles.errorMessage}/>
      </div>
      <SubmitBtn btnName="Iniciar Sesion" />

    </form>
  );
};

export default LoginForm;
  