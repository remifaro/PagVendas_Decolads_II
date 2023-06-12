// css
import styles from "./Componente4.module.css"

// components
import Botao from "../components/Botao"

const Componente4 = () => {
    return (
        <div className={styles.comp4}>
            <h1>
                Mais de 80 empresas com seu posicionamento digital transformado.
            </h1>
            <p>
                Fale conosco para que possamos te ajudar a transformar o posicionamento da sua empresa no digital.
            </p>
            <Botao />
        </div>
    )
}

export default Componente4