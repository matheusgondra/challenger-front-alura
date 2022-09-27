import { CodeEditorWrapper } from "./styles";

interface Props {
	colorEditor: string;
}

export function CodeEditor({ colorEditor }: Props) {
	return (
		<CodeEditorWrapper colorEditor={colorEditor}>
			<div>
				<pre>
					<code contentEditable>const express = require("express");</code>
				</pre>
			</div>
		</CodeEditorWrapper>
	);
}
