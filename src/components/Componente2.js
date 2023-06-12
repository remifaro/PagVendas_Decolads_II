import styles from "./Componente2.module.css"
import LogoFundoBranco from "../assets/logo_fundo_branco.png"


const Componente2 = () => {
    return (
        <div className={styles.comp2}>
            <div className={styles.comp21}>
                <img src={LogoFundoBranco} alt="imagem logo" />
            </div>
            <div className={styles.comp22}>
                <h1>A Decolads</h1>
                <p>Somos a Decolads, uma agência de marketing que tem como objetivo transformar o posicionamento dos negócios locais para que tenham um alcance bem maior e mais assertivo na sua região, através do Google, YouTube e redes sociais. Com os anúncios online e um bom posicionamento, alcançamos mais pessoas interessadas nos produtos ou serviços de nossos clientes, fazendo com que tenham maior probabilidade de venda de seus serviços.</p>
                <p>Se você quer ser visto na sua cidade e ter público interessado no seu serviço, entre em contato conosco, será um prazer te ajudar!</p>
            </div>
        </div>
    );
};

export default Componente2;