import React from 'react';
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Note App
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/"
                >Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/search"
                >Поиск</NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/about"
                >О приложение</NavLink>
            </li>
        </ul>
    </nav>
);