import React, {ReactElement} from "react";

interface IProps {
    names: string[]
}

const ElementChildren: React.FC<IProps> = (props) => {
    let elements: string[] = props.names;

    return (
        <React.Fragment>
            {elements.map((el, i) => {
                return (
                    <li key={i}
                        className="list-group-item bg-secondary bg-opacity-10">
                        <a>
                            {el}
                        </a>
                    </li>
                );
            })}
        </React.Fragment>
    );
}

export default ElementChildren;