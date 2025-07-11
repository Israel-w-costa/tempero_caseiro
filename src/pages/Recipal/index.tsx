import MainLayout from '../../templates/MainLayout'
import styles from './style.module.css'
import recipalInfoPages from '../../components/RecipalInfo/RecipalInfoPages'

export default function Recipal() {
   
    
    return (
        <MainLayout>
            <button onClick={()=>console.log(recipalInfoPages)}>clicar</button>
          {recipalInfoPages.map((recipalInfoPage) =>(
            <div className={styles.container_recipal} key={recipalInfoPage.id}>
                <h1>{recipalInfoPage.titulo}</h1>
                <img src={recipalInfoPage.imagem} />
                <div>
                <h3>📜 Introdução: </h3>
                <p>{recipalInfoPage.introducao}</p>
                <h3>🧂 Ingredientes:</h3>
                <p>{recipalInfoPage.ingredientes}

                </p>
                <h3>👨‍🍳 Modo de Preparo:</h3>
                <p>{recipalInfoPage.preparo_etapa1}</p>
                <p>{recipalInfoPage.preparo_etapa2}</p>
                <p>{recipalInfoPage.preparo_etapa3}</p>
                <p>{recipalInfoPage.preparo_etapa4}</p>
                
                </div>
            </div> 
          ))}

        </MainLayout>
    )
}