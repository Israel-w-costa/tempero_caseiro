import MainLayout from "../../templates/MainLayout";
import styles from './styles.module.css'
import user from '../../assets/user2.png'

export default function Forum() {
    return (
        <MainLayout>
            <div className={styles.container_forum}>
                <h1>Fórum Tempero Caseiro</h1>
                <p>Um espaço para compartilhar experiências, tirar dúvidas e trocar ideias com outros apaixonados por temperos e receitas caseiras!</p>
                <div className={styles.container_forum_comment}>
                <img src={user}/>
                <p>dwdwmdwdwfefefefffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddd ff</p>
                </div>
                <div className={styles.container_forum_write}>
                <textarea></textarea>
                <button className={styles.container_forum_write_button} type='submit'>Enviar</button>
                </div>
            </div>     
        </MainLayout>
    )
}