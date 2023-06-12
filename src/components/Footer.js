import styles from "./Footer.module.css"

import Logo from '../assets/logo.png';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <NavLink to="/" ><div><img src={Logo} alt="logo" /></div></NavLink>
      <ul>
        <li></li>
        <li><a href="https://wa.me/5581997307620?text=Ol%C3%A1%21+Tenho+interesse+em+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Decolads."><FaWhatsapp />(81) 9 9730-7620</a></li>
        <li><a href="https://www.instagram.com/decolads_/"><FaInstagram />decolads_</a></li>
      </ul>
      <div>© 2023 – Todos os Direitos Reservados</div>
    </div>
  )
}



export default Footer