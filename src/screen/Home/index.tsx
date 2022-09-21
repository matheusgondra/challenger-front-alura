import { Header } from "../../components/Header";
import { MenuNav } from "../../components/MenuNav";
import { HomeWrapper } from "./styles";

export function Home() {
    return (
        <HomeWrapper>
            <Header />
            <main>
                <MenuNav />
                <section id="projects">
                    <h2>Seu projeto</h2>
                    <input placeholder="Nome do seu projeto" />
                    <textarea placeholder="Descrição do seu projeto" />
                </section>
            </main>
        </HomeWrapper>
    );
}