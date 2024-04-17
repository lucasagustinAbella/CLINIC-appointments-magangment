import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HallImage from '../assets/Hall.webp';
import DiagnosticoImage from '../assets/Diagnostico.jpg';
import DoctorImage2 from "../assets/Doctor2.jpg"
import styles from "../styles/homeCarrousel.module.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={DiagnosticoImage} alt="Third slide" style={{ maxHeight: '506px' }} />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3 className={styles.h3Carrousel}>Equipo de Diagnostico de alta generacion</h3>
          <p>Ultimas mejoras en el sistema, para cualquier paciente, y en cualquier situacion</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={HallImage} alt="Second slide" style={{ maxHeight: '506px' }} />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3 className={styles.h3Carrousel}>Los mejores profesionales</h3>
          <p>Brindamos el mejor servicio y acompañamiento</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={DoctorImage2} alt="First slide" style={{ maxHeight: '506px' }} />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3 className={styles.h3Carrousel}>Especialistas</h3>
          <p className={styles.textCarrousel}>Tenemos una gran cantidad de especialistas para lo que necesesites</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
