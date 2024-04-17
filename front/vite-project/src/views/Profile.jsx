import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import User from "../components/User";
import styles from "../styles/Profile.module.css";
import axios from "axios";
import formatDate from "../helpers/formatDate";
import { setUserData } from "../redux/reducer"; 

const Profile = () => {
  const dispatch = useDispatch(); 
  const user = useSelector(state => state.user);
  
  useEffect(() => {
    if (user && user.user.login === true) {
      const userId = user.user.id; // Accede a user.user.id
      axios.get(`http://localhost:3000/users/${userId}`)
        .then((res) => {
          dispatch(setUserData(res.data)); 
        })
        .catch((error) => {
          console.error('Error al obtener los datos del usuario:', error);
        });
    }
  }, [dispatch, user.user.login, user.user.id]); 

  const profileTitle = `${user.user.firstName} ${user.user.lastName}`;

  const formattedBirthdate = formatDate(user.user.birthdate);

  return (
    <div className={styles.Profile}>
      <h2 className={styles.ProfileTitle}>{profileTitle}</h2>
      <div className={styles.UserInfo}>
        <User
          key={user.user.id} 
          firstName={user.user.firstName} 
          lastName={user.user.lastName}
          email={user.user.email}
          birthdate={formattedBirthdate}
          nDni={user.user.nDni}
        />
      </div>
    </div>
  );
};

export default Profile;
