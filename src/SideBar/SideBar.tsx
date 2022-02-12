import React from 'react';
import './SideBar.scss';
import SideBarElement from "./SideBarElement/SideBarElement";

const SideBar = () => {
    const names: string[] = ['ASP.NET',
                            'Node.js',
                            'SpringBoot',
                            'React.js',
                            'Blazor',
                            'Azure'
    ];

    const subtopics: string[][] = [
        ['Web Api', 'JWT', 'Sesja', 'MVC', 'Logowanie'],
        ['Web Api', 'JWT', 'Sesja', 'serwowanie html'],
        ['Web Api', 'JWT', 'Sesja', 'MVC'],
        ['JSX', 'Stan', 'Props', 'Przekazywanie propsów'],
        ['Blazor WebAssembly', 'Blazor Server', 'Stan', 'Praca z api', 'Formularze'],
        ['Bazy danych', 'Azure Functions', 'Metryka', 'Diagnostyka']
    ];

    return (
        <div className="sidebar">
            <div className="nav-list">
                <ul className="list-group">
                    {names.map((name, i) => {
                        return <SideBarElement name={name} key={i} subtopics={subtopics[i]} />;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;