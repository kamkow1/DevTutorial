import React, {ReactElement} from "react";
import './ElementChildren.scss';

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
                        className="list-group-item element">
                        <a href={url} className="custom-link">
                            {el}
                        </a>
                    </li>
                );
            })}
        </React.Fragment>
    );
}

export default ElementChildren;