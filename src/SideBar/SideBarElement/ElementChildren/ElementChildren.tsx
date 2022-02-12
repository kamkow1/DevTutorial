import React, {ReactElement} from "react";

interface IProps {
    names: string[],
    topic: string
}

const ElementChildren: React.FC<IProps> = (props) => {
    let elements: string[] = props.names;

    const toUrl = (text: string) => {
        text.toString()
            .toLowerCase()


        return text;
    }

    return (
        <React.Fragment>
            {elements.map((el, i) => {
                const url: string = `/courses/${props.topic
                        .toLowerCase()
                        .replace(' ', '')
                        .replace('.', '')}/`
                        +
                        el
                        .toLowerCase()
                        .replace(' ', '')
                        .replace('.', '');


                return (
                    <li key={i}
                        className="list-group-item bg-secondary bg-opacity-10">
                        <a href={url}>
                            {el}
                        </a>
                    </li>
                );
            })}
        </React.Fragment>
    );
}

export default ElementChildren;