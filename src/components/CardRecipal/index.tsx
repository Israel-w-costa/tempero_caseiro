import styles from'./styles.module.css'
import cards from '../RecipalInfo/recipalInfoCard'


export default function CardRecipal  () {
   

  return (
    <>
     <h1 className={styles.recitas_texto}>Receitas</h1>
   {cards.map( (card) => (
    
   <div className={styles.container_recitas} key={card.id}>
    <a href='#' className={styles.container_imagem_recitas}>
      <img src={card.imagemRecita}/>
      <h3>{card.titulo}</h3>
      <p>{card.pararagrafo}</p>
    </a>
    </div>
   ))}
    </>
  )
}