// css
import styles from "./Componente1.module.css"

// components
import Botao from "../components/Botao"

const Componente1 = () => {
    return (
        <div className={styles.comp1}>
            <div className={styles.overlay}>
                <div className={styles.comp11}>
                    <h1>Aumente suas vendas online com a gestão de tráfego especializada da nossa equipe</h1>
                    <p>Nós cuidamos do seu tráfego enquanto você cuida do seu negócio!</p>
                    <Botao />
                </div>
            </div>
        </div>
    )
}

export default Componente1