// css
import styles from "./Componentecontato.module.css"

// components
import Botao_form from "../components/Botao_form"

const Componentecontato = () => {
  return (
    <>
      <div className={styles.contato}>
        <div className={styles.overlay}>
        </div>
      </div>
      <div className={styles.form}>
      <h1>Fale Conosco</h1>
        <p>Nossos especialistas estão prontos para conversar com você no WhatsApp, entender seu caso e explicar o passo a passo para <span>colocar seu negócio no topo</span> ! Clique no botão abaixo.</p>
        <Botao_form />
      </div>
    </>
  )
}

export default Componentecontato