// css
import styles from "./Formulario.module.css"

// firebase
import {db} from "./firebaseConfig"
import{addDoc, collection} from "firebase/firestore"

// hooks
import {useState} from 'react'

const Formulario = () => {

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[fone, setFone] = useState();
    const[mensagem, setMensagem] = useState();

    const userCollectionRef = collection(db, "contatos_formulario") 

    const handleSubmit = (e) => {
        addDoc(userCollectionRef, {
            name: name,
            email: email,
            fone: fone,
            mensagem: mensagem
        }).then(()=>{
            if(!alert("Contato enviado com sucesso!")) document.location = 'https://decolads.netlify.app/contato'
        }).catch((error)=>{
            alert(error.message)
        })
    };

    return (
        <div className={styles.formulario}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome Completo: </label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="fone">Telefone / WhatsApp: </label>
                    <input type="number" name="fone" placeholder="Digite o seu número de telefone / watsapp" onChange={(e) => setFone(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="mensagem">Mensagem: </label>
                    <textarea type="text" name="mensagem" placeholder="Digite a sua mensagem" onChange={(e) => setMensagem(e.target.value)}/>
                </div>
            </form>
            <button onClick={handleSubmit}>Enviar Mensagem</button>
        </div>
    )
}

export default Formulario