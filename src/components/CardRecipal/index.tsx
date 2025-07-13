import styles from'./styles.module.css'
import recipalCards from '../RecipalInfo/RecipalCards'
import type {TypeRecipal} from '../RecipalInfo/TypeRecipal'
import { Link } from 'react-router-dom'


export default function CardRecipal  () {
 


// function hendleRecipalCard(id:number) {
//     return id
//     }  

  return (
    // <Link to={`/receita/${recipalCard.id}`}>Ver receita</Link> // ✅ Isso gera "/receita/1"
    <>
     <h1 className={styles.recitas_texto}>Receitas</h1>
   {recipalCards.map( (recipalCard:TypeRecipal) => (
    
   <div className={styles.container_recitas}
    // onClick={()=>hendleRecipalCard(recipalCard.id)  
     key={recipalCard.id}>
    {/* <a href='#' className={styles.container_imagem_recitas}> */}
    <Link to={`../../pages/Recipal/${recipalCard.id}` }>
      <div className={styles.container_imagem_recitas}>
      <img src={recipalCard.imagem} alt={recipalCard.subtitulo}/>
      <h3>{recipalCard.tituloPrincipal}</h3>
      <p>{recipalCard.introducao}</p>
      </div>
    </Link>
    {/* </a> */}
    </div>
   ))}
    </>
  )
}