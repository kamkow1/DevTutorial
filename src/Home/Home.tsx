import React from "react";
import './Home.css';

function Home() {
    return(
        <div className="text-center home-container">
            <h3>Witaj w DevTutorial - kursie fullstack developmentu!</h3>
            <p>
                Poniżej wybierz sekcję, do której chcesz przejść
            </p>
            <div>
                <h4>Back-end</h4>
                <div className="nav-list">
                    <ul className="list-group">
                        <li className="list-group-item">ASP.NET</li>
                        <li className="list-group-item list-group-item-primary">Node.js i express.js</li>
                        <li className="list-group-item list-group-item-secondary">Spring Framework</li>
                        <li className="list-group-item list-group-item-success">Laravel</li>
                    </ul>
                </div>

                <h4>Front-end</h4>
                <div className="nav-list">
                    <ul className="list-group">
                        <a className="list-group-item list-group-item-danger"
                            href="/frontend/react">React.js</a>
                        <a className="list-group-item list-group-item-warning"
                            href="/frontend/vue">Vue.js</a>
                        <a className="list-group-item list-group-item-info"
                            href="/frontend/blazor">Blazor WebAssembly i Blazor Server</a>
                        <a className="list-group-item list-group-item-primary"
                            href="/frontend/razor_pages">Razor Pages</a>
                        <a className="list-group-item list-group-item-secondary"
                            href="/frontend/thymeleaf">Thymeleaf</a>
                        <a className="list-group-item list-group-item-light"
                            href="/frontend/angular">Angular</a>
                        <a className="list-group-item list-group-item-dark"
                            href="/frontend/bootstrap">Bootstrap</a>
                    </ul>
                </div>

                <h4>Dodatkowe</h4>
                <div className="nav-list">
                    <ul className="list-group">
                        <a className="list-group-item list-group-item-secondary"
                            href="/extra/design_patterns">Różne wzorce projektowe</a>
                        <a className="list-group-item"
                            href="/extra/could_solutions">Rozwiązania chmurowe</a>
                        <a className="list-group-item list-group-item-danger"
                            href="/extra/git">Git - system kontroli wersji</a>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Home;