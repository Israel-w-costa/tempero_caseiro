import styles from'./styles.module.css'

export default function Navagate () {
   return (
    <nav>
    <ul className={styles.container_navagate}>
      <li><a href="#"/>Inicio</li>
      <li><a href="#"/>Forúm</li>
      <li><a href="#"/>Sobre</li>
    </ul>
    </nav>
   )
}