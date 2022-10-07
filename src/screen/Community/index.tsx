import { useEffect, useState } from "react";
import { CardProject } from "../../components/CardProject";
import { Header } from "../../components/Header";
import { MenuNav } from "../../components/MenuNav";
import { CommunityWrapper } from "./styles";
import storagy from "../../services/Storagy";

interface projectsProps {
	name: string;
    description: string;
    colorEditor: string;
    language: string;
    code: string | null;
}

export function Community() {
	const [liked, setLiked] = useState(false);
	const [projects, setProjects] = useState<projectsProps[]>([]);

	useEffect(() => {
		const _projects = storagy.get("projects");
		setProjects([...projects, _projects]);
	}, []);

	return (
		<CommunityWrapper>
			<Header />
			<main>
				<MenuNav page="community" />
				<section id="cards">
					{ projects.map((project, index) => (
						<CardProject
							code={project.code}
							colorEditor={project.colorEditor}
							description={project.description}
							language={project.language}
							liked={liked}
							setLiked={setLiked}
							name={project.name}
							key={index}
						/>
					)) }
				</section>
			</main>
		</CommunityWrapper>
	);
}