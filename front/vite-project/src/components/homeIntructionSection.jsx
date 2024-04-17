import style from "../styles/homeInstruction.module.css"; 
import InstructionCard from "./registerCard";
import LoginCard from "./loginCard";
import LandingCard from "./LandingCard";


const HomeInstruction = () => {
  return (
    <section className={style.instructionSection}>
      <h1 className={style.instructionh1}>NUEVO SISTEMA DE PERFILES!</h1>
     <ul className={style.instructionul}> 
      <li className={style.instructionil}> Registrate para poder acceder a todos las funciones</li>
      <li className={style.instructionil}> Inicia sesion y edita tu perfil!</li>
      <li className={style.instructionil}> Utiliza nuestro sistema de turnos online</li>
      <li className={style.instructionil}> Gestiona los turnos desde tu perfil <strong>con solo un click</strong></li>
     </ul>
     {/* <InstructionCard></InstructionCard>
     <h2 className={style.h2}> 0 </h2>
     <LoginCard></LoginCard> */}
     <LandingCard></LandingCard>
    </section>
  );
}

export default HomeInstruction;
