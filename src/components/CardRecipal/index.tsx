import styles from'./styles.module.css'
import recipalCards from '../RecipalInfo/RecipalCards'
import type {TypeRecipal} from '../RecipalInfo/TypeRecipal'


export default function CardRecipal  () {
 


// function hendleRecipalCard(id:number) {
//     return id
//     }  

  return (
    <>
     <h1 className={styles.recitas_texto}>Receitas</h1>
   {recipalCards.map( (recipalCard:TypeRecipal) => (
    
   <div className={styles.container_recitas}
    // onClick={()=>hendleRecipalCard(recipalCard.id)  
     key={recipalCard.id}>
    <a href='#' className={styles.container_imagem_recitas}>
      <img src={recipalCard.imagem} alt={recipalCard.subtitulo}/>
      <h3>{recipalCard.tituloPrincipal}</h3>
      <p>{recipalCard.introducao}</p>
    </a>
    </div>
   ))}
    </>
  )
}