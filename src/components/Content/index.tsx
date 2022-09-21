import { Code, UsersThree } from "phosphor-react";
import { MenuWrapper } from "./styles";


export function Content() {
    return (
        <MenuWrapper>
            <section>
                <h2>Menu</h2>
                <nav>
                    <ul>
                        <li>
                            <div>
                                <Code size={20} color="#FFF" weight="bold" />
                            </div>
                            <span>Editor de código</span>
                        </li>
                        <li>
                            <div>
                                <UsersThree size={20} color="#FFF" weight="fill" />
                            </div>
                            <span>Comunidade</span>
                        </li>
                    </ul>
                </nav>
            </section>
        </MenuWrapper>
    );
}