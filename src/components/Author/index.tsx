import { AuthorWrapper } from "./styles";

interface Props {
	photo: string;
	name: string;
}

export function Author({ name, photo }: Props) {
	return (
		<AuthorWrapper>
			<img src={photo} alt="Foto de perfil" />
			<span>{name}</span>
		</AuthorWrapper>
	);
}
