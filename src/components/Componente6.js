// css
import styles from "./Componente6.module.css"

// components
import Botao from "../components/Botao";


const Componente6 = () => {
    return (
        <div className={styles.comp6}>
            <h1>
            Não perca mais tempo, estamos aqui para impulsionar suas vendas e tornar seu negócio uma referência local. 
            </h1>
            <p>
            Entre em contato conosco, vamos colocar seu negócio no topo!
            </p>
            <Botao />
        </div>
    );
};

export default Componente6;