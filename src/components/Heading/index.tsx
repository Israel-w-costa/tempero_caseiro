import styles from'./styles.module.css'
import pan from '../../assets/pan.png'

export default function Heading () {
   return (
    <>
    <a href='#' className={styles.container_heading}>
    <img src={pan}/>
    <h1>Tempero em casa</h1>
    </a>
    <span className={styles.container_span}>Cozinhar bem é mais fácil do que parece com receitas simples, saudáveis e cheias de sabor.</span>
    </>
   )
}