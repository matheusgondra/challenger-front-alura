import { Code, UsersThree } from "phosphor-react";
import { MenuWrapper } from "./styles";
import { Link } from "react-router-dom";

interface Props {
	page?: "home" | "community";
}

export function MenuNav({ page = "home" }: Props) {
    return (
        <MenuWrapper>
            <h2>Menu</h2>
            <nav>
                <ul>
                    <li className={page === "community" ? "off" : undefined}>
								<Link to="/">
									<div>
										<Code size={20} color="#FFF" weight="bold" />
									</div>
									<span>Editor de código</span>
								</Link>
                    </li>
                    <li className={page === "home" ? "off" : undefined}>
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