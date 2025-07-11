import styles from'./styles.module.css'
import pan from '../../assets/pan.png'

export default function Footer () {
   return (
    <div className={styles.container_footer}>
    <img src={pan} />
    <p> Tempero caseiro é projeto sem fins lucrativo</p>
    </div>
   )
}