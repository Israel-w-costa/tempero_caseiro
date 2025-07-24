import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Navagate() {
  return (
    <nav>
      <ul className={styles.container_navagate}>
        <Link to={"/"} className={styles.container_navagate_link}><li>Inicio</li> </Link>
        <Link to={"pages/forum"} className={styles.container_navagate_link}><li>Forúm</li> </Link>
        <Link to={"pages/sobre"} className={styles.container_navagate_link}><li>Sobre</li> </Link>
      </ul>
    </nav>
  )
}