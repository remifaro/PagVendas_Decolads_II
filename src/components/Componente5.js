// css
import styles from "./Componente5.module.css"

// imagens
import Fabio from "../assets/fabio.png"
import Sarah from "../assets/sarah.png"
import Emerson from "../assets/emerson.png"


const Componente5 = () => {
  return (
    <div className={styles.comp5}>
      <h4>DEPOIMENTOS</h4>
      <h1>O que dizem nossos clientes?</h1>
      <ul>
        <li><img src={Fabio} alt="Depoimento Fabio" />
          <h3>Fábio Barros</h3>
          <h4>@fabiobarros94</h4>
          <p>Atendimento bastante cordial, postura completamente profissional, altamente capacitados
            e explicaram tudo o que precisávamos saber.

            Nossos horizontes expandiram de uma forma que não imaginávamos. Recomendadíssmos!</p>
        </li>
        <li><img src={Emerson} alt="Depoimento Emerson" />
          <h3>Emerson Lima</h3>
          <h4>@emersonlima.adv</h4>
          <p>Criei o meu site com a Decolads (www.emersonlimaprev.com.br) e o serviço da empresa surpreendeu minhas expectativas. Foram muito além do que eu imagina, pois foram rápidos, entenderam tudo que eu queria no meu site e no final o site estava perfeito. Sou muito agradecido e pretendo usar outros serviços deles também, como o tráfego pago. Super indico a empresa. Vamos Juntos!</p>
        </li>
        <li><img src={Sarah} alt="Depoimento Sarah" />
          <h3>Sarah Queiroz</h3>
          <h4>@sarahqueiroznutricionista</h4>
          <p>Serviço excelente e profissional super dedicado. Tive uma consultoria super completa e detalhada, com material específico pro meu interesse.
            Recomendo de olhos fechados!</p>
        </li>
      </ul>
    </div>
  )
}

export default Componente5