import React from "react";
import './Article.css';

interface IProps {
    path: string
}

const ArticlePicture: React.FC<IProps> = props => {
    return (
        <div>
            <img src={props.path} alt="photo" />
        </div>
    );
}

export default  ArticlePicture;