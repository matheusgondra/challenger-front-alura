import { Header } from "../../components/Header";
import { MenuNav } from "../../components/MenuNav";
import { CommunityWrapper } from "./styles";

export function Community() {
	return (
		<CommunityWrapper>
			<Header />
			<main>
				<MenuNav />
			</main>
		</CommunityWrapper>
	);
}