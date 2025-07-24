import { Link } from "react-router-dom";
import MainLayout from "../../templates/MainLayout";
import styles from './styles.module.css'

export default function PageNotFound() {
    return (
        <MainLayout>
            <div className={styles.container_page_not_found}>
                <h1>🌿 Opa! Página não encontrada!</h1>
                <p>Parece que esse tempero se perdeu na despensa...
                    A página que você procura não está disponível ou foi movida.
                </p>
                <p>
                    Mas não se preocupe!
                    Você pode voltar para a página inicial e continuar explorando receitas e dicas deliciosas.</p>
                <Link to={'/'}>
                    <button>Pagina inicial</button>
                </Link>
            </div>
        </MainLayout>
    )
}