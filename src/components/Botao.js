import styles from "../components/Botao.module.css"

import { NavLink } from "react-router-dom";

const Botao = () => {
    return (
        <NavLink to="/contato">
            <div className={styles.btn}>
                Entre em contato agora
            </div>
        </NavLink>
    );
};

export default Botao;