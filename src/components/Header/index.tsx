import { List, MagnifyingGlass } from "phosphor-react";
import logo from "../../assets/logo-alura-dev.svg";
import { Author } from "../Author";
import { HeaderContainer } from "./styles";



export function Header() {
	return (
		<HeaderContainer>
			<img src={logo} alt="Logo" />
			<input placeholder="Busque por algo" />
			<div className="mobile-buttons">
				<button type="button">
					<MagnifyingGlass size={20} color="#FFF" weight="bold" />
				</button>
				<button className="list" type="button">
					<List size={20} color="#FFF" weight="bold" />
				</button>
			</div>
			<Author
				name="Matheus"
				photo="https://github.com/matheusgondra.png"
			/>
		</HeaderContainer>
	);
}