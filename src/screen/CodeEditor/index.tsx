import { CodeEditorWrapper } from "./styles";
import macIcon from "../../assets/mac_buttons.svg";

interface Props {
	colorEditor: string;
}

export function CodeEditor({ colorEditor }: Props) {
	return (
		<CodeEditorWrapper colorEditor={colorEditor}>
			<div>
				<img src={macIcon} alt="botões do mac" />
				<pre>
					<code contentEditable>const express = require("express");</code>
				</pre>
			</div>
		</CodeEditorWrapper>
	);
}
