import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "Summerize the proCCess library.", value: "Summerize the proCCess library." },
    { text: "What are the test processes for Software Release?", value: "What are the test processes for Software Release?" },
    { text: "How to write a project quality report?", value: "How to write a project quality report?" },
    { text: "Can you explain me the software development and build process?", value: "Can you explain me the software development and build process?" },
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
