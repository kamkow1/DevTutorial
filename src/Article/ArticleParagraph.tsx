import React from "react";
import './Article.css';

interface IProps {
    content: string
}

const ArticleParagraph: React.FC<IProps> = props => {
    return (
        <p className="article-p">
            {props.content}
        </p>
    );
}

export default ArticleParagraph;