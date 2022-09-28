import { Code, UsersThree } from "phosphor-react";
import { MenuWrapper } from "./styles";
import { Link } from "react-router-dom";

export function MenuNav() {
    return (
        <MenuWrapper>
            <h2>Menu</h2>
            <nav>
                <ul>
                    <li>
								<Link to="/">
									<div>
										<Code size={20} color="#FFF" weight="bold" />
									</div>
									<span>Editor de código</span>
								</Link>
                    </li>
                    <li className="off">
                        <Link to="/comunidade">
									<div>
										<UsersThree size={20} color="#FFF" weight="fill" />
									</div>
									<span>Comunidade</span>
								</Link>
                    </li>
                </ul>
            </nav>
        </MenuWrapper>
    );
}