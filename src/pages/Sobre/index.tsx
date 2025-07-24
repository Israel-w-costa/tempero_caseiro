import MainLayout from "../../templates/MainLayout";
import styles from './styles.module.css'

export default function sobre() {
    return (
        <MainLayout>
            <div className={styles.container_sobre}>
                <h1>Sobre o Tempero Caseiro</h1>
                <div>
                    <p>O Tempero Caseiro nasceu de uma necessidade real: facilitar a vida de quem cozinha em casa — especialmente de quem mora sozinho e quer manter a organização e o sabor na rotina.</p>
                    <p>Durante meus estudos em Análise e Desenvolvimento de Sistemas,
                    percebi o valor de criar projetos que resolvem dores do dia a dia. 
                    Como eu mesmo enfrentava o desafio de organizar meus temperos e receitas, 
                    decidi transformar essa experiência em um site simples e funcional.</p>
                </div>
            </div>     
        </MainLayout>
    )
}