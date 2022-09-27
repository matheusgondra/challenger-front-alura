import { Header } from "../../components/Header";
import { MenuNav } from "../../components/MenuNav";
import { HomeWrapper } from "./styles";
import { ChromePicker } from "react-color";
import { useState } from "react";

export function Home() {
	const [colorEditor, setColorEditor] = useState("#6BD1FF");

	return (
		<HomeWrapper colorEditor={colorEditor}>
			<Header />
			<main>
				<MenuNav />
				<section id="code-editor">
					<div>
						<div>
							<pre>
								<code contentEditable>const express = require("express");</code>
							</pre>
						</div>
					</div>
					<button>Visualizar com o highlight</button>
				</section>
				<form>
					<section id="projects">
						<h2>Seu projeto</h2>
						<input placeholder="Nome do seu projeto" />
						<textarea placeholder="Descrição do seu projeto" />
					</section>
					<section id="language">
						<h2>Personalização</h2>
						<div className="language-container">
							<select>
								<option value="Javascript">Javascript</option>
								<option value="HTML">HTML</option>
								<option value="CSS">CSS</option>
							</select>
							<div className="input-color"></div>
							{/* <ChromePicker
								color={colorEditor}
								onChangeComplete={(color) => setColorEditor(color.hex)}	
							/> */}
						</div>
					</section>
					<button>Salvar projeto</button>
				</form>
			</main>
		</HomeWrapper>
	);
}

