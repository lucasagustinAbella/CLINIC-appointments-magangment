export const validateLogin = (input) => {
  const errors = {};

  if (!input.username) {
    errors.username = "El nombre de usuario es requerido";
  }

  if (!input.password) {
    errors.password = "La contraseña es requerida";
  }

  return errors;
};

export const validateRegister = (input) => {
  const errors = {};

  //VALIDACIONES COMPLEJAS HECHAS CON IA

  if (!input.firstName) {
    errors.firstName = "El nombre es requerido";
  }

  if (!input.lastName) {
    errors.lastName = "El apellido es requerido";
  }

  if (!input.email) {
    errors.email = "El correo electrónico es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.email)) {
    errors.email = "Dirección de correo electrónico inválida";
  }

  if (!input.birthdate) {
    errors.birthdate = "La fecha de nacimiento es requerida";
  }

  if (!input.nDni) {
    errors.nDni = "El número de DNI es requerido";
  } else if (!/^\d{8}$/.test(input.nDni)) {
    errors.nDni = "El número de DNI debe contener 8 dígitos";
  }

  if (!input.username) {
    errors.username = "El nombre de usuario es requerido";
  }

  if (!input.password) {
    errors.password = "La contraseña es requerida";
  } else if (input.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  if (!input.confirmpassword) {
    errors.confirmpassword = "La confirmación de contraseña es requerida";
  } else if (input.password !== input.confirmpassword) {
    errors.confirmpassword = "Las contraseñas no coinciden";
  }

  return errors;
};

export const validateSchedule = (input) => {
  const errors = {};

  //VALIDACIONES COMPLEJAS HECHAS CON IA
  if (!input.date) {
    errors.date = "La fecha es requerida";
  } else {
    const selectedDate = new Date(input.date);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      errors.date = "No se puede seleccionar una fecha pasada";
    }

    const dayOfWeek = selectedDate.getDay();

    if (dayOfWeek === 6 || dayOfWeek === 5) {
      errors.date = "No se pueden pedir turnos los sábados y domingos";
    }
  }

  if (!input.time) {
    errors.time = "La hora es requerida";
  }
  return errors;
};
