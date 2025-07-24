import styles from'./styles.module.css'
import recipalCards from '../RecipalInfo/RecipalCards'
import type {TypeRecipal} from '../RecipalInfo/TypeRecipal'
import { Link } from 'react-router-dom'


export default function CardRecipal  () {
 
  return (
    <>
     <h1 className={styles.recitas_texto}>Receitas</h1>
   {recipalCards.map( (recipalCard:TypeRecipal) => (
    
   <div className={styles.container_recitas}
     key={recipalCard.id}>
    <Link to={`../../pages/Recipal/${recipalCard.id}` }>
      <div className={styles.container_imagem_recitas}>
      <img src={recipalCard.imagem} alt={recipalCard.tituloPrincipal}/>
      <h3>{recipalCard.tituloPrincipal}</h3>
      <div>
      <p>{recipalCard.introducao}</p>
      </div>
      </div>
    </Link>
    </div>
   ))}
    </>
  )
}