import React from 'react';
import './SideBar.scss';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="nav-list">
                <ul className="list-group">
                    <li>
                        <a className="list-group-item"
                            href="/backend/asp">ASP.NET</a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/backend/node_express">Node.js i express.js</a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/backend/spring">Spring Framework</a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item"
                           href="/backend/laravel">Laravel</a>
                    </li>
                </ul>
            </div>

            <div className="nav-list">
                <ul className="list-group">
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/frontend/react">React.js</a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/frontend/vue">Vue.js</a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/frontend/blazor">Blazor</a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/frontend/razor_pages">Razor Pages</a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/frontend/thymeleaf">Thymeleaf</a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/frontend/angular">Angular</a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/frontend/bootstrap">Bootstrap</a>
                    </li>
                </ul>
            </div>

            <div className="nav-list">
                <ul className="list-group">
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/extra/design_patterns">Różne wzorce projektowe</a>
                    </li>
                    <li>
                        <a className="list-group-item"
                            href="/extra/could_solutions">Rozwiązania chmurowe</a>
                    </li>
                    <li>
                        <a className="list-group-item list-group-item"
                            href="/extra/git">Git - system kontroli wersji</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;