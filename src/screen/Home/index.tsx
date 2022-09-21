import { Header } from "../../components/Header";
import { MenuNav } from "../../components/MenuNav";
import { HomeWrapper } from "./styles";

export function Home() {
    return (
        <HomeWrapper>
            <Header />
            <main>
                <MenuNav />
                <form>
                    <section id="projects">
                        <h2>Seu projeto</h2>
                        <input placeholder="Nome do seu projeto" />
                        <textarea placeholder="Descrição do seu projeto" />
                    </section>
                    <section id="language">
                        <h2>Personalização</h2>
                        <div>
                            <select>
                                <option  value="Javascript">Javascript</option>
                                <option  value="HTML">HTML</option>
                                <option  value="CSS">CSS</option>
                            </select>
                            <input type="color" />
                        </div>
                    </section>
                    <button>Salvar projeto</button>
                </form>
            </main>
        </HomeWrapper>
    );
}