import { List, MagnifyingGlass } from "phosphor-react";
import logo from "../../assets/logo-alura-dev.svg";
import { HeaderContainer } from "./styles";



export function Header() {
	return (
		<HeaderContainer>
			<img src={logo} alt="Logo" />
			<input placeholder="Busque por algo" />
			<div>
				<button type="button">
					<MagnifyingGlass size={20} color="#FFF" weight="bold" />
				</button>
				<button type="button">
					<List size={20} color="#FFF" weight="bold" />
				</button>
			</div>
			<div className="user">
				<img src="https://github.com/matheusgondra.png" alt="Foto de perfil" />
				<span>Matheus</span>
			</div>
		</HeaderContainer>
	);
}