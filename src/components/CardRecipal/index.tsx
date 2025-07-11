import styles from'./styles.module.css'

import imagemRecita from '../../assets/feijao.jpg'

export default function CardRecipal  () {
   
  const cards = [
    {
      src:imagemRecita,
      h3:'Feijoada',
      p:"deliciodsa pratp que dadsadasdwqdwqdwqdwqdw dwdwedwedwddwddwwwdw"
    
    },
    {
      src:imagemRecita,
      h3:'F',
      p:"deliciodsa pratp que dadsadasdwqdwqdwqdwqdw dwdwedwedwddwddwwwdw"
    },
     {
      src:imagemRecita,
      h3:'F',
      p:"deliciodsa pratp que dadsadasdwqdwqdwqdwqdw dwdwedwedwddwddwwwdw"
    },
     {
      src:imagemRecita,
      h3:'F',
      p:"deliciodsa pratp que dadsadasdwqdwqdwqdwqdw dwdwedwedwddwddwwwdw"
    }
  ]

  return (
    <>
     <h1 className={styles.recitas_texto}>Receitas</h1>
   {cards.map( (card) => (
    
   <div className={styles.container_recitas}>
    <a href='#' className={styles.container_imagem_recitas}>
      <img src={card.src}/>
      <h3>{card.h3}</h3>
      <p>{card.p}</p>
    </a>
    </div>
   ))}
    </>
  )
}