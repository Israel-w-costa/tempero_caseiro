import { Link } from 'react-router-dom'
import styles from'./styles.module.css'

export default function Navagate () {
   return (
    <nav>
    <ul className={styles.container_navagate}>
      <Link to={"/"}><li>Inicio</li> </Link>
      <li><a href="#"/>Forúm</li>
      <li><a href="#"/>Sobre</li>
    </ul>
    </nav>
   )
}