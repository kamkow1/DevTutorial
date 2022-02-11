import React from "react";
import './NavBar.scss';
import {Repo} from "./Repo";

interface IProps {
    repos: Repo[]
}

const Dropdown: React.FC<IProps> = props => {
    return (
        <div className="list-group custom-dropdown">
            {props.repos.map((repo, index) => {
                return <a key={index}
                className="list-group-item list-group-item-action"
                href={repo.html_url}
                target="_blank">
                    {index == 0 ? "DevTutorial na Github" : repo.name}
                </a>;
            })}
        </div>
    );
}

export default Dropdown;