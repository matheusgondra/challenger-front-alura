import { AuthorWrapper } from "./styles";

interface Props {
	photo: string;
	name: string;
	visible: boolean;
}

export function Author({ name, photo, visible }: Props) {
	return (
		<AuthorWrapper isVisible={visible}>
			<img src={photo} alt="Foto de perfil" />
			<span>{name}</span>
		</AuthorWrapper>
	);
}
