import { ChatCircle, HeartStraight } from "phosphor-react";
import { Author } from "../Author";
import { CardProjectWrapper } from "./styles";
import macButtonIcon from "../../assets/mac_buttons.svg";

interface CardProjectsProps {
    name: string;
    description: string;
    colorEditor: string;
    language: string;
    code: string | null;
    liked: boolean;
    setLiked: (value: boolean) => void;
}

export function CardProject({ name, description, colorEditor, language, code, setLiked, liked }: CardProjectsProps) {
    return (
        <CardProjectWrapper colorEditor={colorEditor}>
            <div className="codeEditor">
                <div>
                    <img src={macButtonIcon} alt="botões do mac" />
                    <pre>
                        <code className={`language-${language}`}>{code}</code>
                    </pre>
                </div>
            </div>
            <div className="content">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="actions">
                <div className="icons">
                    <div>
                        <ChatCircle size={20} color="#ffffff" weight="fill" />
                        <span>9</span>
                    </div>
                    <div onClick={() => setLiked(!liked)}>
                        <HeartStraight size={20} color={liked ? "red" : "#FFF"} weight="fill" />
                        <span>9</span>
                    </div>
                </div>
                <Author
                    name="@Matheus"
                    photo="https://github.com/matheusgondra.png"
                    visible
                />
            </div>
        </CardProjectWrapper>
    )
}