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
                        <li className="list-group-item list-group-item-danger">React.js</li>
                        <li className="list-group-item list-group-item-warning">Vue.js</li>
                        <li className="list-group-item list-group-item-info">Blazor WebAssembly i Blazor Server</li>
                        <li className="list-group-item list-group-item-primary">Razor Pages</li>
                        <li className="list-group-item list-group-item-secondary">Thymeleaf</li>
                        <li className="list-group-item list-group-item-light">Angular</li>
                        <li className="list-group-item list-group-item-dark">Bootstrap</li>
                    </ul>
                </div>

                <h4>Dodatkowe</h4>
                <div className="nav-list">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-secondary">Różne wzorce projektowe</li>
                        <li className="list-group-item">Rozwiązania chmurowe</li>
                        <li className="list-group-item list-group-item-primary">Dobre zwyczaje w web developmencie</li>
                        <li className="list-group-item list-group-item-danger">Git - system kontroli wersji</li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Home;