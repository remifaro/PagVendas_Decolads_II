// css
import styles from "./Componente3.module.css"

// imagens
import SimboloTrafego from "../assets/simbolotrafego.png"
import SimboloSite from "../assets/simbolosite.png"
import SimboloConsultoria from "../assets/simboloconsultoria.png"


const Componente3 = () => {
    return (
        <div className={styles.comp3}>
            <h1>Nossos Serviços:</h1>
            <ul>
                <li><img src={SimboloTrafego} alt="Símbolo Tráfego" />
                    <h3>Tráfego Pago</h3>
                    <p>Fazemos com que sua empresa tenha mais visibilidade na região, consequentemente aumentando o seu faturamento. Para sua empresa ser encontrada por quem você desejar, utilizamos anúncios no Google e YouTube Ads, Facebook e Instagram Ads.</p>
                </li>
                <li><img src={SimboloSite} alt="Símbolo Site" />
                    <h3>Criação de Sites</h3>
                    <p>Apresentação clara e completa da sua empresa, em formato de site, de forma assertiva e alinhada com seus objetivos.</p>
                </li>
                <li><img src={SimboloConsultoria} alt="Símbolo Consultoria" />
                    <h3>Consultoria Especializada</h3>
                    <p>Vamos analisar todo seu posicionamento
                        no digital, para você ter clareza de como sua empresa está em relação ao seu mercado.</p>
                </li>
            </ul>
        </div>
    )
}

export default Componente3