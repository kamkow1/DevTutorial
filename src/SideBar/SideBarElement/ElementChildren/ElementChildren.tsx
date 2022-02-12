import React, {ReactElement} from "react";

interface IProps {
    names: string[]
}

const ElementChildren: React.FC<IProps> = (props) => {
    //let elements: string[] = props.names.split(';');
    //console.log('elementy', elements)
    let elements: string[] = props.names;

    /*const childElements = () => {
        let children: ReactElement[] = [];

        elements.map((el, i) => {
            let url: string = `/${el
                .toString()
                .replace('.', '')
                .replace(' ', '')
                .toLowerCase()}`;

            children.push(
                <li key={i}>
                    <a href={url}>
                        {el}
                    </a>
                </li>
            );
            console.log(el)
        });

        console.log(`dzieci: ${children.toString()}`)
        return children;
    }*/

    return (
        <React.Fragment>
            {elements.map((el, i) => {
                return (
                    <li key={i}>
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