import { Code, UsersThree } from "phosphor-react";
import { MenuWrapper } from "./styles";

export function Menu() {
    return (
        <MenuWrapper>
            <h2>Menu</h2>
            <nav>
                <ul>
                    <li>
                        <div>
                            <Code size={20} color="#FFF" weight="bold" />
                        </div>
                        <span>Editor de código</span>
                    </li>
                    <li className="off">
                        <div>
                            <UsersThree size={20} color="#FFF" weight="fill" />
                        </div>
                        <span>Comunidade</span>
                    </li>
                </ul>
            </nav>
        </MenuWrapper>
    );
}