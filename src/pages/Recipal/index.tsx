import MainLayout from '../../templates/MainLayout'
import styles from './style.module.css'
import recipalCards from '../../components/RecipalInfo/RecipalCards'
import type  {TypeRecipal} from '../../components/RecipalInfo/TypeRecipal'
import { useParams } from 'react-router-dom'

export default function Recipal() {
const {id} = useParams()


  return (
    <MainLayout>
      <button onClick={() => console.log(  id)}>clicar</button>
      {recipalCards.map((recipalCard:TypeRecipal) => (
        <div className={styles.container_recipal} key={recipalCard.id}>
          {recipalCard.id.toString() == id?
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