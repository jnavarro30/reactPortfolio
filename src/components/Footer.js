import React from "react";
import "../form.js";

export default function Footer() {
  return (
    <footer className="footer">
            <section id="about" className="footer__about">
                <h1 className="about__title">&nbsp;&nbsp;About</h1>
                <p className="about__description">
                    Learning Javascript through courses, daily challenges and weekly projects.
                </p>
            </section>
            <section id="contact" className="footer__contact">
                <h2 className="contact__title">Contact</h2>
                <form id="my-form" action="https://formspree.io/f/xnqovebe" method="POST" className="footer__form">
                    <input id="name" name="name" type="text" className="form__name" placeholder="Name" required />
                    <input id="email" name="email" type="email" className="form__email" placeholder="Email" required />
                    <textarea id="message" name="message" type="text" className="form__message" placeholder="Message" cols="30" rows="8"></textarea>
                    <button id="my-form-button" className="footer__send" type="submit" name="submit">SEND</button>
                </form>
                <div id="my-form-status"></div>
                <ul className="footer__icons">
                    <li className="footer__icon">
                        <a href="https://github.com/jnavarro30/" target="_blank" rel="noreferrer">
                            <span className="fab fa-github-square"></span>
                            <span className="footer__icon-text">GitHub</span>
                        </a>
                    </li>
                    <li id="resume" className="footer__icon">
                        <a href="https://drive.google.com/file/d/1dIc5Y85_9LAYOr-J5-zvwzRVE-KyLTp6/view?usp=sharing" target="_blank" rel="noreferrer" download>
                            <span className="far fa-file-pdf"></span>
                            <span className="footer__icon-text">Resumé</span>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
  );
}