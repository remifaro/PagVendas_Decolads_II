import styles from "./Footer.module.css"

import Logo from '../assets/logo.png';
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <NavLink to="/" ><div><img src={Logo} alt="logo" /></div></NavLink>
      <ul>
        <li>2023 © Decolads - Negócios Digitais</li>
        <li>Todos os Direitos Reservados - <a href="https://www.instagram.com/decolads/"> <FaInstagram />decolads</a></li>
      </ul>
    </div>
  )
}



export default Footer