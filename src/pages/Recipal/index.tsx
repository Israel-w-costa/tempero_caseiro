import MainLayout from '../../templates/MainLayout'
import styles from './style.module.css'
import recipalCards from '../../components/RecipalInfo/RecipalCards'
import type  {TypeRecipal} from '../../components/RecipalInfo/TypeRecipal'

export default function Recipal() {



  return (
    <MainLayout>
      <button onClick={() => console.log( "oi")}>clicar</button>
      {recipalCards.map((recipalCard:TypeRecipal) => (
        <div className={styles.container_recipal} key={recipalCard.id}>
          {recipalCard.id == 1?
            <>
              <h1>{recipalCard.subtitulo}</h1>
              <img src={recipalCard.imagem} />
              <h3>📜 Introdução: </h3>
              <p>{recipalCard.introducao}</p>
              <h3>🧂 Ingredientes:</h3>
              <p>{recipalCard.ingredientes}</p>
              <h3>👨‍🍳 Modo de Preparo:</h3>
              <p>{recipalCard.preparo_etapa1}</p>
              <p>{recipalCard.preparo_etapa2}</p>
              <p>{recipalCard.preparo_etapa3}</p>
              <p>{recipalCard.preparo_etapa4}</p>

            </>

            :
            null
          }
        </div>
      ))}

    </MainLayout>
  )
}