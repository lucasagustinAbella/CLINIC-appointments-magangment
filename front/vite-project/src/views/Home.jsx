import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/home.module.css";
import ControlledCarousel from '../components/homeCarrousel';
import HomeSection from '../components/homeSection';
import HomeInstruction from '../components/homeIntructionSection';
// import icon from "../assets/Calendar.png"



const Home = () => {
  return (
    <>
      <ControlledCarousel></ControlledCarousel>
      <HomeSection></HomeSection>
      <hr className={styles.separator} /> 
      <HomeInstruction></HomeInstruction>
    </>
  );
};

export default Home;
