import styles from "../components/Botaoform.module.css"

import { FaWhatsapp } from "react-icons/fa";

const Botaoform = () => {
    return (
            <div className={styles.btn}>
                <a href="https://wa.me/5581997307620?text=Ol%C3%A1%21+Tenho+interesse+em+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Decolads."><FaWhatsapp />Fale conosco agora</a>
            </div>
    );
};

export default Botaoform;