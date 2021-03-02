import React from "react";

import { Link } from 'react-router-dom';

const AppHeader = (): JSX.Element => {
    return ( 
        <nav className="Banner">
            <div className="max-w-6xl mx-auto p-2 flex space-x-8 items-baseline">
                <Link to="/">
                    <img src="images/vektor-logo.svg" alt="vektorprogrammet logo" className="h-20" />
                </Link>
                <div className="flex-grow"></div>
                <Link className="header-link" to="/assistenter">Assistenter</Link>
                <Link className="header-link" to="/om-vektor">Om oss</Link>
                <Link className="header-link" to="/skoler">For skoler</Link>
                <Link className="header-link" to="/foreldre">For foreldre</Link>
                <Link className="header-link" to="/team">Team</Link>
                <Link className="header-link" to="/kontakt">Kontakt</Link>
            </div>
        </nav>
    );
};

export default AppHeader;
