import React, {ReactElement} from "react";
import ElementChildren from "./ElementChildren/ElementChildren";

interface IState {
    isOpen: boolean
}

interface IProps {
    name: string,
    subtopics: string[]
}

class SideBarElement extends React.Component<IProps, IState> {

    state: IState = {
        isOpen: false
    }

    handleElementClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(this.state);
    }

    render () {
        let caret: ReactElement = this.state.isOpen ?
            (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-caret-down-fill" viewBox="0 0 16 16"
                    onClick={this.handleElementClick}>
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-caret-right-fill" viewBox="0 0 16 16"
                    onClick={this.handleElementClick}>
                    <path
                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
            );

        /*const topics: Map<string, string> = new Map<string, string>();
        topics.set(this.props.name
            .toLowerCase()
            .replace(' ', '')
            .replace('.', ''),
            'Web API;Sesja;JWT');*/

        return (
            <li className="side-bar-element">
                <span className="list-group-item">
                    {this.props.name}
                    {caret}
                </span>

                {this.state.isOpen &&
                    <ul>
                        <ElementChildren names={this.props.subtopics} />
                        {/*{topics.map((topic, i) => {
                            console.log(topics[i]);
                            return <ElementChildren
                                names={topics[i]}
                                key={i} />
                        })}*/}
                    </ul>
                }
            </li>
        );
    }
}

export default  SideBarElement;