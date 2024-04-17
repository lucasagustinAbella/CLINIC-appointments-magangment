const formatDate = (birthdate) => {
  const date = new Date(birthdate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("es-ES", options);
};

export default formatDate;
