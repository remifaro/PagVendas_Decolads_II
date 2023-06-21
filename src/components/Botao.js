import styles from "../components/Botao.module.css"

import { NavLink } from "react-router-dom";

const Botao = () => {
    return (
        <NavLink to="/contato">
            <div className={styles.btn}>
                Quero decolar meu negócio agora
            </div>
        </NavLink>
    );
};

export default Botao;