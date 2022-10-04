import { CodeEditorWrapper, Highlight } from "./styles";
import macIcon from "../../assets/mac_buttons.svg";
import { useEffect, useRef } from "react";
import hljs from "highlight.js";

interface Props {
	colorEditor: string;
	type?: "primary" | "secondary";
	language: string;
	highlightTrigger: boolean;
	setValue: (value: string | null) => void;
}

export function CodeEditor({ 
	colorEditor,
	type = "primary",
	language,
	highlightTrigger,
	setValue
}: Props) {
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
					<code
						ref={code}
						className={`language-${language}`}
						contentEditable
						onInput={(e) => {
							const target = e.target as HTMLElement;
							setValue(target.textContent);
						}}
					>
					</code>
				</Highlight>
			</div>
		</CodeEditorWrapper>
	);
}
