import React from "react";

export default function Nav({ openNav, setOpenNav }) {
    
    return (
        <>
        <nav className={`nav ${openNav ? "show__nav" : ""}`}>
            <div className="nav__menu">
                <h2 className="nav__title">Menu</h2>
                <i className={`nav__icon fas ${openNav ? "fa-times show__icon" : "fa-bars"}`} onClick={() => setOpenNav(!openNav)}></i>
            </div>
            <div className={`nav__links ${openNav ? "show" : ""}`}>
                <a href="#0" className="nav__link">Pokedex</a>
                <a href="#1" className="nav__link">Quiz</a>
                <a href="#2" className="nav__link">Playlist</a>
                <a href="#3" className="nav__link">Hangman</a>
                <a href="#4" className="nav__link">Todo List</a>
                <a href="#5" className="nav__link">Edabit Home</a>
                <a href="#about" className="nav__link">About</a>
                <a href="#contact" className="nav__link">Contact</a>
                <a href="#resume" className="nav__link">Resume</a>
            </div>
        </nav>
        <div className="nav__overlay"></div>
        </>
    );
}