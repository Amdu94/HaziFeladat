import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./Menu.css"

const Menu = () => (
    <div className="Menu">
        <nav>
            <ul>
                <li className="grow">
                    <p>Dulai Ádám</p>
                </li>
                <li className="grow">
                    <p>+36702916129</p>
                </li>
            </ul>
            <ul>
                <li className="grow">
                    <Link to="/">HOME</Link>
                </li>
                <li className="grow">
                    <Link to="/matches">LOGIN</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
);

export default Menu;
