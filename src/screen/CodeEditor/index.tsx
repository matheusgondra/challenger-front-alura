import { CodeEditorWrapper } from "./styles";
import macIcon from "../../assets/mac_buttons.svg";

interface Props {
	colorEditor: string;
	type?: "primary" | "secondary";
}

export function CodeEditor({ colorEditor, type = "primary" }: Props) {
	return (
		<CodeEditorWrapper colorEditor={colorEditor} type={type}>
			<div>
				<img src={macIcon} alt="botões do mac" />
				<pre>
					<code contentEditable>const express = require("express");</code>
				</pre>
			</div>
		</CodeEditorWrapper>
	);
}
