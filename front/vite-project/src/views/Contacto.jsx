import styles from "../styles/Contacto.module.css"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SubmitBtn } from "../components/submitBtn";

const Contacto = () => {
  return (
    <>
    <section className={styles.contactSection}>
      <h2 className={styles.contactH2}> Formulario de contacto</h2>
      <Form className= {styles.contactForm}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridContactInfo"> {/* Agrega un Form.Group para la información de contacto */}
          <Form.Label>Contact Info</Form.Label>
          <Form.Control as="textarea" placeholder="Enter contact information" rows={3} /> {/* Usa el componente textarea para campos de texto más grandes */}
        </Form.Group>

      </Row>
    <SubmitBtn btnName="Enviar" />
    </Form>
    </section> 
    <hr className={styles.separator} /> 
    <section className={styles.ubicationSection}>
        <div className="container mt-2">
          <h2>Nuestra Ubicación</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6800.7550069812405!2d-68.57719965293066!3d-31.54125289929863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968140fec7a646bf%3A0x3d035727b2f6bed0!2sFacultad%20de%20Ciencias%20Exactas%2C%20F%C3%ADsicas%20y%20Naturales!5e0!3m2!1ses-419!2sar!4v1700696890838!5m2!1ses-419!2sar"
            className="col-xl-12" height="400px" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
    
  )}

  export default Contacto;