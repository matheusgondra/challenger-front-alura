import { Header } from "../../components/Header";
import { MenuNav } from "../../components/MenuNav";
import { HomeWrapper } from "./styles";
import { ChromePicker } from "react-color";
import { useState } from "react";
import { CodeEditor } from "../../components/CodeEditor";

export function Home() {
	const [colorEditor, setColorEditor] = useState("#6BD1FF");
	const [colorPickerDisplay, setColorPickerDisplay] = useState(false);

	return (
		<HomeWrapper colorEditor={colorEditor}>
			<Header />
			<main>
				<MenuNav />
				<section id="code-editor">
					<CodeEditor colorEditor={colorEditor} />
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
							<div className="color-picker-container">
								<div className="input-color" onClick={() => setColorPickerDisplay(!colorPickerDisplay)}>
								</div>
								{colorPickerDisplay && (
									<div className="color-picker-container">
										<ChromePicker
											className="color-picker"
											color={colorEditor}
											onChangeComplete={(color) => setColorEditor(color.hex)}
										/>
									</div>
								)}
							</div>
						</div>
					</section>
					<button>Salvar projeto</button>
				</form>
			</main>
		</HomeWrapper>
	);
}

