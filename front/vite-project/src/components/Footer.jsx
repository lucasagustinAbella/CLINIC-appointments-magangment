import instagramLogo from "../assets/instagram.png";
import twitterLogo from "../assets/Twitter.png";
import linkedinLogo from "../assets/Linkedin.png";
import githubLogo from "../assets/github.png"
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.textContainer}>
        <p>© 2024 Clinica Lujan</p>
        <span> Hecho por <strong>Lucas Abella</strong></span><br/>
        <span> Todos los derechos reservados &copy; 2024</span>
        </div>
        <div className= {styles.socialmediaContainer}>
                <a href="https://www.instagram.com/lucasabella_18/"><img src={instagramLogo} alt="Instagram" /></a>
                <a href="https://twitter.com/lucasabella_18"><img src={twitterLogo} alt="Twitter" /></a>
                <a href="https://www.linkedin.com/in/lucas-agustin-abella-burgoa-73ab0129a/"><img src={linkedinLogo} alt="LinkedIn" /></a>
                <a href="https://github.com/lucasagustinAbella"><img src={githubLogo} alt="GitHub" /></a>
            </div>
      </footer>
    );
}


export default Footer;