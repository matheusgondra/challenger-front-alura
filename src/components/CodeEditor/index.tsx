import { CodeEditorWrapper, Highlight } from "./styles";
import macIcon from "../../assets/mac_buttons.svg";
import { useEffect, useRef } from "react";
import hljs from "highlight.js";

interface Props {
	colorEditor: string;
	type?: "primary" | "secondary";
	language: string;
	highlightTrigger: boolean;
}

export function CodeEditor({ colorEditor, type = "primary", language = "javacript", highlightTrigger }: Props) {
	const code = useRef<HTMLElement>(null);

	useEffect(() => {
		document.querySelectorAll("pre code").forEach(el => {
			hljs.highlightElement(el as HTMLElement);
		});
	}, [highlightTrigger]);
	
	return (
		<CodeEditorWrapper colorEditor={colorEditor} type={type}>
			<div onClick={() => {
				code.current?.focus();
			}}>
				<img src={macIcon} alt="botões do mac" />
				<Highlight >
					<code ref={code} className={`language-${language}`} contentEditable>const express = require("express");</code>
				</Highlight>
			</div>
		</CodeEditorWrapper>
	);
}
