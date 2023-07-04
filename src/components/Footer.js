import styles from "./Footer.module.css"

import Logo from '../assets/logo.png';
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <NavLink to="/" ><div><img src={Logo} alt="logo" /></div></NavLink>
      {/* <hr /> */}
      <p>2023 © Decolads - Negócios Digitais – Todos os Direitos Reservados | <a href="https://www.instagram.com/decolads_/"> <FaInstagram />decolads</a></p>
    </div>
  )
}



export default Footer