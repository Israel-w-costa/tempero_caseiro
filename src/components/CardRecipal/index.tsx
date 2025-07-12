import styles from'./styles.module.css'
import recipalCards from '../RecipalInfo/RecipalCards'


export default function CardRecipal  () {
   

  return (
    <>
     <h1 className={styles.recitas_texto}>Receitas</h1>
   {recipalCards.map( (recipalCard) => (
    
   <div className={styles.container_recitas} key={recipalCard.id}>
    <a href='#' className={styles.container_imagem_recitas}>
      <img src={recipalCard.imagem}/>
      <h3>{recipalCard.tituloPrincipal}</h3>
      <p>{recipalCard.introducao}</p>
    </a>
    </div>
   ))}
    </>
  )
}