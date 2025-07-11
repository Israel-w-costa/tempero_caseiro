
import imagemRecita from '../../assets/feijao.jpg'

export default function CardRecipal  () {
   return (
    <>
    <h1 className={styles.recitas_texto}>Receitas</h1>
   <div className={styles.container_imagem}>
    <a href='#' className={styles.container_imagem_recitas}>
      <img src={imagemRecita}/>
      <h3>Feijoada</h3>
      <p>deliciodsa pratp que dadsadasdwqdwqdwqdwqdw dwdwedwedwddwddwwwdw</p>
    </a>
    </div>
    </>
  )
}