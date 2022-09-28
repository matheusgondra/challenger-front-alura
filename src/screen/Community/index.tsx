import { ChatCircle, HeartStraight } from "phosphor-react";
import { useState } from "react";
import { Author } from "../../components/Author";
import { CodeEditor } from "../../components/CodeEditor";
import { Header } from "../../components/Header";
import { MenuNav } from "../../components/MenuNav";
import { CommunityWrapper } from "./styles";

export function Community() {
	const [liked, setLiked] = useState(false);

	return (
		<CommunityWrapper>
			<Header />
			<main>
				<MenuNav page="community" />
				<section id="cards">
					<div className="card">
						<CodeEditor
							colorEditor="purple" 
							type="secondary"
						/>
						<div>
							<div className="content">
								<h2>Titulo do projeto</h2>
								<p>Essa é a descrição do meu projeto</p>
							</div>
							<div className="actions">
								<div className="icons">
									<div>
										<ChatCircle size={20} color="#ffffff" weight="fill" />
										<span>9</span>
									</div>
									<div onClick={() => setLiked(!liked)}>
										<HeartStraight size={20} color={liked ? "red": "#FFF"} weight="fill" />
										<span>9</span>
									</div>
								</div>
								<Author
									name="@Matheus"
									photo="https://github.com/matheusgondra.png"
									visible
								/>
							</div>
						</div>
					</div>
					<div className="card">
						<CodeEditor
							colorEditor="purple" 
							type="secondary"
						/>
						<div>
							<div className="content">
								<h2>Titulo do projeto</h2>
								<p>Essa é a descrição do meu projeto</p>
							</div>
							<div className="actions">
								<div className="icons">
									<div>
										<ChatCircle size={20} color="#ffffff" weight="fill" />
										<span>9</span>
									</div>
									<div>
										<HeartStraight size={20} color="#ffffff" weight="fill" />
										<span>9</span>
									</div>
								</div>
								<Author
									name="@Matheus"
									photo="https://github.com/matheusgondra.png"
									visible
								/>
							</div>
						</div>
					</div>
					<div className="card">
						<CodeEditor
							colorEditor="purple" 
							type="secondary"
						/>
						<div>
							<div className="content">
								<h2>Titulo do projeto</h2>
								<p>Essa é a descrição do meu projeto</p>
							</div>
							<div className="actions">
								<div className="icons">
									<div>
										<ChatCircle size={20} color="#ffffff" weight="fill" />
										<span>9</span>
									</div>
									<div>
										<HeartStraight size={20} color="#ffffff" weight="fill" />
										<span>9</span>
									</div>
								</div>
								<Author
									name="@Matheus"
									photo="https://github.com/matheusgondra.png"
									visible
								/>
							</div>
						</div>
					</div>
					<div className="card">
						<CodeEditor
							colorEditor="purple" 
							type="secondary"
						/>
						<div>
							<div className="content">
								<h2>Titulo do projeto</h2>
								<p>Essa é a descrição do meu projeto</p>
							</div>
							<div className="actions">
								<div className="icons">
									<div>
										<ChatCircle size={20} color="#ffffff" weight="fill" />
										<span>9</span>
									</div>
									<div>
										<HeartStraight size={20} color="#ffffff" weight="fill" />
										<span>9</span>
									</div>
								</div>
								<Author
									name="@Matheus"
									photo="https://github.com/matheusgondra.png"
									visible
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</CommunityWrapper>
	);
}