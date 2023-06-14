// css
import styles from "./Componentecontato.module.css"

// components
import Formulario from "./Formulario"


const Componentecontato = () => {
  return (
    <>
      <div className={styles.contato}>
        <div className={styles.overlay}>
          <h1>Fale Conosco</h1>
        </div>
      </div>
      <div className={styles.form}>
        <p>Envie suas informações no formulário abaixo! Explique seu caso para que possamos entrar em contato o mais rápido com você! Juntos vamos colocar seu negócio no topo! </p>
        <Formulario />
      </div>
    </>
  )
}

export default Componentecontato