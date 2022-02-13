import React from "react";
import {ArticleModel} from "./ArticleModel";
import './Article.css';
import ArticleParagraph from "./ArticleParagraph";
import ArticlePicture from "./ArticlePicture";

interface IState {
    isLinksOpen: boolean
}

class Article extends React.Component<ArticleModel, IState> {
    componentDidMount() {
        console.log('zamontowano')
    }

    state: IState = {
        isLinksOpen: true
    }

    render() {
        return (
            <div className="article">
                <h2>
                    {this.props.title}
                </h2>

                <p className="introduction">
                    {this.props.introduction}
                </p>

                {this.props.sections.map((s, i) => {
                    return (
                        <div>
                            <ArticleParagraph content={s} />
                            <ArticlePicture path={this.props.pictures[i]} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Article;