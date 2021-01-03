import React from "react";
import project from "../images/appPokedex.JPG";
import project1 from "../images/appQuiz.JPG";
import project2 from "../images/appMusicPlayer.JPG";
import project3 from "../images/appHangman.JPG";
import project4 from "../images/appTodoList.JPG";
import project5 from "../images/edabitHome.JPG";

export default function App() {

return (
<main className="main">
    <ul className="main__projects">
        <li id="0" className="main__project">
            <div className="main__project-overlay">
                <h2 className='main__project-title'>Pokedex</h2>
                <p className="main__project-description">Linked api to
                    search for pokemon & created an interactive image.<br /><br />HTML/Sass/Javascript</p>
            </div>
            <img src={project} alt="pokedex" className="main__project-image" />
            <div className="main__project-select">
                <a className='main__project-demo' href="https://jnavarro30.github.io/appPokedex/" target="_blank" rel="noreferrer">
                    <h2>Demo</h2>
                </a>
                <a className='main__project-source' href="https://github.com/jnavarro30/appPokedex/" target="_blank" rel="noreferrer">
                    <h2>Code</h2>
                </a>
            </div>
        </li>
        <li id="1" className="main__project">
            <div className="main__project-overlay">
                <h2 className='main__project-title'>Quiz</h2>
                <p className="main__project-description">Linked api to generate questions for the
                    quiz.<br /><br />HTML/Sass/Javascript</p>
            </div>
            <img src={project1} alt="" className="main__project-image" />
            <div className="main__project-select">
                <a className='main__project-demo' href="https://jnavarro30.github.io/appQuiz/" target="_blank" rel="noreferrer">
                    <h2>Demo</h2>
                </a>
                <a className='main__project-source' href="https://github.com/jnavarro30/appQuiz/" target="_blank" rel="noreferrer">
                    <h2>Code</h2>
                </a>
            </div>
        </li>
        <li id="2" className="main__project">
            <div className="main__project-overlay">
                <h2 className='main__project-title'>Playlist</h2>
                <p className="main__project-description">Playable music files.<br /><br />HTML/Sass/Javascript</p>
            </div>
            <img src={project2} alt="" className="main__project-image" />
            <div className="main__project-select">
                <a className='main__project-demo' href="https://jnavarro30.github.io/appMusicPlayer/" target="_blank" rel="noreferrer">
                    <h2>Demo</h2>
                </a>
                <a className='main__project-source' href="https://github.com/jnavarro30/appMusicPlayer/" target="_blank" rel="noreferrer">
                    <h2>Code</h2>
                </a>
            </div>
        </li>
        <li id="3" className="main__project">
            <div className="main__project-overlay">
                <h2 className='main__project-title'>Hangman</h2>
                <p className="main__project-description">First game and implemented revealing module
                    pattern.<br /><br />HTML/Sass/Javascript</p>
            </div>
            <img src={project3} alt="" className="main__project-image" />
            <div className="main__project-select">
                <a className='main__project-demo' href="https://jnavarro30.github.io/jabHangman/" target="_blank" rel="noreferrer">
                    <h2>Demo</h2>
                </a>
                <a className='main__project-source' href="https://github.com/jnavarro30/jabHangman/" target="_blank" rel="noreferrer">
                    <h2>Code</h2>
                </a>
            </div>
        </li>
        <li id="4" className="main__project">
            <div className="main__project-overlay">
                <h2 className='main__project-title'>Todo List</h2>
                <p className="main__project-description">Simple and functional.<br /><br />HTML/Sass/Javascript</p>
            </div>
            <img src={project4} alt="" className="main__project-image" />
            <div className="main__project-select">
                <a className='main__project-demo' href="https://jnavarro30.github.io/jabTodoList/" target="_blank" rel="noreferrer">
                    <h2>Demo</h2>
                </a>
                <a className='main__project-source' href="https://github.com/jnavarro30/jabTodoList/" target="_blank" rel="noreferrer">
                    <h2>Code</h2>
                </a>
            </div>
        </li>
        <li id="5" className="main__project">
            <div className="main__project-overlay">
                <h2 className='main__project-title'>Edabit Home</h2>
                <p className="main__project-description">Made Edabit Homepage mobile friendly.<br /><br />HTML/CSS/Javascript
                </p>
            </div>
            <img src={project5} alt="" className="main__project-image" />
            <div className="main__project-select">
                <a className='main__project-demo' href="https://jnavarro30.github.io/edabitHome/" target="_blank" rel="noreferrer">
                    <h2>Demo</h2>
                </a>
                <a className='main__project-source' href="https://github.com/jnavarro30/edabitHome/" target="_blank" rel="noreferrer">
                    <h2>Code</h2>
                </a>
            </div>
        </li>
    </ul>
</main>
);
}