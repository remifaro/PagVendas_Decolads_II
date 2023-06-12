import styles from "./Navbar.module.css"

import Logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
           <NavLink to="/" >
           <img src={Logo} alt="Logo Decolads" />
           </NavLink>
           <ul className={styles.links_list}>
            <li>
                <NavLink to="/">
                    Início
                </NavLink>
            </li>
            <li>
                <NavLink to="/contato">
                    Contato
                </NavLink>
            </li>
           </ul>
        </nav>
    )
}

export default Navbar
